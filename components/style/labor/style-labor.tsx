"use client"

import { useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
import Select from "react-select";
import { creatableSelectionStyles, styleLaborForm } from "@/lib/constants";
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { getCategoryOptions, getStyleOptions } from "@/lib/utils";
import { updateStyleLabor } from "@/actions/style";
import { toast as reToast } from "react-hot-toast";

const StyleLabor = () => {
  const styles = useStyleStore((state) => state.styles);
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState(styleLaborForm);

  useEffect(() => {
    const options = getCategoryOptions(styles);

    updateFormState(draft => {
      draft.categoryOptions = options;
    });
  }, [styles])

  useEffect(() => {
    if (formState.category) {
      const { styleOption } = getStyleOptions(styles, formState.category.id);

      updateFormState(draft => {
        draft.style = null;
        draft.styleOptions = styleOption;
      });
    }
  }, [formState.category])

  const updateFormState = (recipe: (draft: typeof styleLaborForm) => void) => {
    setFormState((prevState) => produce(prevState, recipe));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      updateStyleLabor(formState).then((res) => {
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
          <Label htmlFor="category">Category Name</Label>
          <Select
            id="category"
            styles={creatableSelectionStyles}
            required={true}
            name="category"
            options={formState.categoryOptions}
            onChange={(newValue) => (updateFormState(draft => { draft.category = newValue }))}
            value={formState.category}
            isClearable
          />
        </div>
        <div className="col-span-2  flex flex-col gap-2">
          <Label htmlFor="style">Style Name</Label>
          <Select
            styles={creatableSelectionStyles}
            required={true}
            name="style"
            options={formState.styleOptions}
            onChange={(newValue) => (updateFormState(draft => { draft.style = newValue }))}
            value={formState.style}
            isClearable
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="styleLabor">Labor Charge per Post (Style)</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" placeholder="Type Charge" min={0} value={formState.laborPrice} onChange={(e) => (updateFormState(draft => { draft.laborPrice = (e.target.value) }))} id="styleLabor" />
          </InputGroup>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="minProfit">minProfit per Style</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" placeholder="Type minProfit" min={0} value={formState.minProfit} onChange={(e) => (updateFormState(draft => { draft.minProfit = (e.target.value) }))} id="minProfit" />
          </InputGroup>
        </div>
        <div className="col-span-2">
          <Button disabled={isPending} type="submit">{isPending ? 'Saving...' : 'Save'}</Button>
        </div>
      </div>
    </form>
  );
};

export default StyleLabor;