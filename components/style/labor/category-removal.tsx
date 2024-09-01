"use client"

import { useEffect, useMemo, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
import Select from "react-select";
import { categoryRemoval, creatableSelectionStyles } from "@/lib/constants";
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { getCategoryById, getCategoryOptions } from "@/lib/utils";
import { updateCategoryRemoval } from "@/actions/style";
import { toast as reToast } from "react-hot-toast";

const CategoryRemoval = () => {
  const styles = useStyleStore((state) => state.styles);
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState(categoryRemoval);
  const categoryOptions = useMemo(() => {
    return getCategoryOptions(styles)
  }, [styles]);

  useEffect(() => {
    if (formState.category) {
      const category = getCategoryById(formState.category.id, styles);

      updateFormState(draft => {
        draft.removalCharge = category?.removalCharge ?? '0';
      });
    }
  }, [formState.category])

  const updateFormState = (recipe: (draft: typeof categoryRemoval) => void) => {
    setFormState((prevState) => produce(prevState, recipe));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      updateCategoryRemoval(formState).then((res) => {
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
            options={categoryOptions}
            onChange={(newValue) => (updateFormState(draft => { draft.category = newValue }))}
            value={formState.category}
            isClearable
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="styleLabor">Removal Charge</Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" placeholder="Type Removal Charge" min={0} value={formState.removalCharge} onChange={(e) => (updateFormState(draft => { draft.removalCharge = (e.target.value) }))} id="styleLabor" />
          </InputGroup>
        </div>
        <div className="col-span-2">
          <Button disabled={isPending} type="submit">{isPending ? 'Saving...' : 'Save'}</Button>
        </div>
      </div>
    </form>
  );
};

export default CategoryRemoval;