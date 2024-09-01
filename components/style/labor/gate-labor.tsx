"use client"

import { useEffect, useMemo, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
import Select from "react-select";
import { gateLabor, creatableSelectionStyles } from "@/lib/constants";
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { getGateById, getGateOptions } from "@/lib/utils";
import { updateGateLabor } from "@/actions/gate";
import { toast as reToast } from "react-hot-toast";

const GateLabor = () => {
  const gates = useStyleStore((state) => state.gates);
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState(gateLabor);
  const gateOptions = useMemo(() => {
    return getGateOptions(gates)
  }, [gates]);

  useEffect(() => {
    if (formState.gate) {
      const gate = getGateById(formState.gate.id, gates);

      updateFormState(draft => {
        draft.laborPrice = gate?.laborPrice ?? '0';
      });
    }
  }, [formState.gate])

  const updateFormState = (recipe: (draft: typeof gateLabor) => void) => {
    setFormState((prevState) => produce(prevState, recipe));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      updateGateLabor(formState).then((res) => {
        if (res?.success) {
          reToast.success(res?.message);
        } else {
          reToast.error(res?.message);
        }
      })
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="gate">Gate Name</Label>
          <Select
            id="gate"
            styles={creatableSelectionStyles}
            required={true}
            name="gate"
            options={gateOptions}
            onChange={(newValue) => (updateFormState(draft => { draft.gate = newValue }))}
            value={formState.gate}
            isClearable
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="styleLabor">Labor Charge</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" min={0} value={formState.laborPrice} onChange={(e) => (updateFormState(draft => { draft.laborPrice = (e.target.value) }))} id="styleLabor" />
          </InputGroup>
        </div>
        <div className="col-span-2">
          <Button disabled={isPending} type="submit">{isPending ? 'Saving...' : 'Save'}</Button>
        </div>
      </div>
    </form>
  );
};

export default GateLabor;