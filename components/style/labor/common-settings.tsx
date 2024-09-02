"use client"

import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from '@iconify/react';
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { updateUserProfit } from "@/actions/gate";
import { toast as reToast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { UserSession } from "@/lib/interfaces";

const CommonSettings = () => {
  const userProfit = useStyleStore((state) => state.userProfit);
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState(userProfit);
  const [session, setSession] = useState<UserSession>(useSession().data as UserSession);

  const updateFormState = (recipe: (draft: typeof userProfit) => void) => {
    setFormState((prevState) => produce(prevState, recipe));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      updateUserProfit(session?.user?.id, formState).then((res) => {
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
          <Label htmlFor="holePrice">Hard Hole Charge (per Hole)</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" required min={0} value={formState.holePrice} onChange={(e) => (updateFormState(draft => { draft.holePrice = (e.target.value) }))} id="holePrice" />
          </InputGroup>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="minProfit">Minium Profit per Account
          </Label>
          <InputGroup merged >
            <InputGroupText>
              <Icon icon="mdi:dollar" />
            </InputGroupText>
            <Input type="number" min={0} required value={formState.minProfit} onChange={(e) => (updateFormState(draft => { draft.minProfit = (e.target.value) }))} id="minProfit" />
          </InputGroup>
        </div>
        <div className="col-span-2">
          <Button disabled={isPending} type="submit">{isPending ? 'Saving...' : 'Save'}</Button>
        </div>
      </div>
    </form>
  );
};

export default CommonSettings;