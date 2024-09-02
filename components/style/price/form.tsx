"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { ourStyleFormState, ourStyleProperties } from "@/lib/constants";
import { getFence } from "@/lib/utils";
import { Icon } from '@iconify/react';
import { toast as reToast } from "react-hot-toast";
import { updateOurPrice } from "@/actions/style";
import clsx from 'clsx';
import { useSession } from "next-auth/react";
import { getCategoryOptions, getStyleOptions } from "@/lib/utils";
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function StyleForm() {
    const styles = useStyleStore((state) => state.styles);
    const isOurFormOpen = useStyleStore((state) => state.isOurFormOpen);
    const setIsOurFormOpen = useStyleStore((state) => state.setIsOurFormOpen);
    const selectedOurStyleId = useStyleStore((state) => state.selectedOurStyleId);
    const [isPending, startTransition] = useTransition();
    const [formState, setFormState] = useState(ourStyleFormState);
    const categoryOptions = useMemo(() => {
        return getCategoryOptions(styles)
    }, [styles]);

    useEffect(() => {
        if (selectedOurStyleId !== 0) {
            const fence = getFence(selectedOurStyleId, styles)
            const { styleOption, colorOption, heightOption, lengthOption } = getStyleOptions(styles, fence?.categoryId);

            updateFormState(draft => {
                draft.id = fence?.id;
                draft.category = categoryOptions.find(option => option.id === fence?.categoryId)?.value ?? '';
                draft.style = styleOption.find(option => option.id === fence?.styleId)?.value ?? '';
                draft.color = colorOption.find(option => option.id === fence?.colorId)?.value ?? '';
                draft.height = heightOption.find(option => option.id === fence?.heightId)?.value ?? '';
                draft.length = lengthOption.find(option => option.id === fence?.lengthId)?.value ?? '';
                draft.ourPanelPrice = Number(fence?.ourPanelPrice);
                draft.ourLftPrice = Number(fence?.ourLftPrice);
                draft.ourThirdFeetGatePrice = Number(fence?.ourThirdFeetGatePrice);
                draft.ourForuthFeetGatePrice = Number(fence?.ourForuthFeetGatePrice);
                draft.ourFifthFeetGatePrice = Number(fence?.ourFifthFeetGatePrice);
                draft.ourEighthFeetGatePrice = Number(fence?.ourEighthFeetGatePrice);
                draft.ourTenthFeetGatePrice = Number(fence?.ourTenthFeetGatePrice);
                draft.ourHeavyDutyEndPostPrice = Number(fence?.ourHeavyDutyEndPostPrice);
                draft.ourEndPostPrice = Number(fence?.ourEndPostPrice);
                draft.ourCornerPostPrice = Number(fence?.ourCornerPostPrice);
                draft.ourFlatCapPrice = Number(fence?.ourFlatCapPrice);
                draft.ourGothicCapPrice = Number(fence?.ourGothicCapPrice);
                draft.ourNewEnglandCapPrice = Number(fence?.ourNewEnglandCapPrice);
                draft.ourFederationCapPrice = Number(fence?.ourFederationCapPrice);
                draft.image = fence?.image
            });
        } else {
            setFormState(ourStyleFormState)
        }
    }, [isOurFormOpen]);

    const updateFormState = (recipe: (draft: typeof ourStyleFormState) => void) => {
        setFormState((prevState) => produce(prevState, recipe));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        startTransition(() => {
            updateOurPrice(formState).then((res) => {
                if (res?.success) {
                    reToast.success(res?.message);
                    setIsOurFormOpen(false)
                } else {
                    reToast.error(res?.message);
                }
            })
        });
    }

    return (
        <Dialog open={isOurFormOpen} onOpenChange={setIsOurFormOpen}>
            <DialogContent size="2xl">
                <DialogHeader className="p-0">
                    <DialogTitle className="text-base font-medium text-default-700 ">
                        'Edit Style'
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <form id="styleForm" onSubmit={handleSubmit}>
                        <div className="h-[300px] sm:h-[600px] w-full">
                            <ScrollArea className="h-full">
                                <div className="hidden lg:block">
                                    <div className="grid grid-cols-12 gap-x-[30px] gap-y-4 ">
                                        <div className="flex justify-center col-span-12 lg:col-span-4">
                                            <div className=" w-[124px] h-[124px] relative rounded-full">
                                                <Avatar className="w-full h-full">
                                                    <AvatarImage src={formState.image ?? ''} />
                                                    <AvatarFallback></AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-8">
                                            <div className="col-span-12 lg:col-span-6">
                                                <Label htmlFor="category">Category Name</Label>
                                                <Input type="text" defaultValue={formState.category ?? ''} disabled />
                                            </div>
                                            <div className="col-span-12 mt-2 lg:col-span-6 ">
                                                <Label htmlFor="style">Style Name</Label>
                                                <Input type="text" defaultValue={formState.style ?? ''} disabled />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <Input type="text" defaultValue={formState.height ?? ''} disabled />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color">Fence Color</Label>
                                            <Input type="text" defaultValue={formState.color ?? ''} disabled />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="length" >Panel Length ( in foot )</Label>
                                            <Input type="text" defaultValue={formState.length ?? ''} disabled />
                                        </div>
                                        {ourStyleProperties.map((prop, index) => (<div key={index} className={clsx('col-span-12 lg:col-span-4', {
                                            'invisible':
                                                (prop.name === 'ourHeavyDutyEndPostPrice' && formState.category?.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'ourCornerPostPrice' && formState.category?.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'ourEndPostPrice' && formState.category?.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'ourFlatCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourGothicCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourNewEnglandCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourFederationCapPrice' && formState.category?.toLowerCase() !== 'vinyl')
                                        })}>
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" onChange={(e) => (updateFormState(draft => { draft[prop.name] = Number(e.target.value) }))} defaultValue={formState[prop.name]} name={prop.name} id={prop.name} />
                                            </InputGroup>
                                        </div>))}
                                    </div>
                                </div>
                                <div className="block lg:hidden">

                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-center">
                                            <div className=" w-[124px] h-[124px] relative rounded-full">
                                                <Avatar className="w-full h-full">
                                                    <AvatarImage src={formState.image ?? ''} />
                                                    <AvatarFallback></AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="category">Category Name</Label>
                                            <Input type="text" defaultValue={formState.category ?? ''} disabled />
                                        </div>
                                        <div>
                                            <Label htmlFor="style">Style Name</Label>
                                            <Input type="text" defaultValue={formState.style ?? ''} disabled />
                                        </div>
                                        <div>
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <Input type="text" defaultValue={formState.height ?? ''} disabled />
                                        </div>
                                        <div>
                                            <Label htmlFor="color">Fence Color</Label>
                                            <Input type="text" defaultValue={formState.color ?? ''} disabled />
                                        </div>
                                        <div>
                                            <Label htmlFor="length" >Panel Length ( in foot )</Label>
                                            <Input type="text" defaultValue={formState.length ?? ''} disabled />
                                        </div>
                                        {ourStyleProperties.map((prop, index) => (<div key={index} className={clsx('col-span-12 lg:col-span-4', {
                                            'invisible':
                                                (prop.name === 'ourHeavyDutyEndPostPrice' && formState.category?.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'ourCornerPostPrice' && formState.category?.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'ourEndPostPrice' && formState.category?.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'ourFlatCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourGothicCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourNewEnglandCapPrice' && formState.category?.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'ourFederationCapPrice' && formState.category?.toLowerCase() !== 'vinyl')
                                        })}>
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" onChange={(e) => (updateFormState(draft => { draft[prop.name] = Number(e.target.value) }))} defaultValue={formState[prop.name]} name={prop.name} id={prop.name} />
                                            </InputGroup>
                                        </div>))}
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                        <div className="flex justify-center gap-3">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={isPending} type="submit">{isPending ? 'Saving...' : 'Save Style'}</Button>
                        </div>
                    </form>
                </div >
            </DialogContent >
        </Dialog >
    );
}
