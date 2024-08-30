"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { creatableSelectionStyles, styleProperties } from "@/lib/constants";
import { createSelectionOption, getFence } from "@/lib/utils";
import { UserSession } from "@/lib/interfaces";
import { Icon } from '@iconify/react';
import { toast as reToast } from "react-hot-toast";
import { createStyle, updateStyle } from "@/actions/style";
import CreatableSelect from 'react-select/creatable';
import Image from "next/image";
import avatar from "@/public/images/avatar/user.png";
import clsx from 'clsx';
import { useSession } from "next-auth/react";
import { getCategoryOptions, getStyleOptions } from "@/lib/utils";
import { useStyleStore } from "@/store/style";
import { produce } from 'immer';
import { styleForm } from "@/lib/constants";

export function StyleForm() {
    const styles = useStyleStore((state) => state.styles);
    const isFormOpen = useStyleStore((state) => state.isFormOpen);
    const setIsFormOpen = useStyleStore((state) => state.setIsFormOpen);
    const selectedStyleId = useStyleStore((state) => state.selectedStyleId);
    const setSelectedStyleId = useStyleStore((state) => state.setSelectedStyleId);
    const [session, setSession] = useState<UserSession>(useSession().data as UserSession);
    const [pending, setPending] = useState(false);
    const [formState, setFormState] = useState(styleForm);
    const categoryOptions = useMemo(() => {
        return getCategoryOptions(styles)
    }, [styles]);

    useEffect(() => {
        if (formState.categoryId) {
            const { styleOption, colorOption, heightOption, lengthOption } = getStyleOptions(styles, formState.categoryId);

            updateFormState(draft => {
                draft.style = null;
                draft.color = null;
                draft.height = null;
                draft.length = null;
                draft.styleOptions = styleOption;
                draft.colorOptions = colorOption;
                draft.heightOptions = heightOption;
                draft.lengthOptions = lengthOption;
            });
        }
    }, [formState.category])

    useEffect(() => {
        if (selectedStyleId !== 0) {
            const fence = getFence(selectedStyleId, styles)
            const { styleOption, colorOption, heightOption, lengthOption } = getStyleOptions(styles, fence?.categoryId);

            updateFormState(draft => {
                draft.categoryId = fence?.categoryId;
                draft.styleId = fence?.styleId;
                draft.colorId = fence?.colorId;
                draft.heightId = fence?.heightId;
                draft.lengthId = fence?.lengthId;
                draft.styleOptions = styleOption;
                draft.colorOptions = colorOption;
                draft.heightOptions = heightOption;
                draft.lengthOptions = lengthOption;
                draft.category = categoryOptions.find(option => option.id === fence?.categoryId);
                draft.style = styleOption.find(option => option.id === fence?.styleId);
                draft.color = colorOption.find(option => option.id === fence?.colorId);
                draft.height = heightOption.find(option => option.id === fence?.heightId);
                draft.length = lengthOption.find(option => option.id === fence?.lengthId);
                draft.panelPrice = Number(fence?.panelPrice);
                draft.lftPrice = Number(fence?.lftPrice);
                draft.thirdFeetGatePrice = Number(fence?.thirdFeetGatePrice);
                draft.foruthFeetGatePrice = Number(fence?.foruthFeetGatePrice);
                draft.fifthFeetGatePrice = Number(fence?.fifthFeetGatePrice);
                draft.eighthFeetGatePrice = Number(fence?.eighthFeetGatePrice);
                draft.tenthFeetGatePrice = Number(fence?.tenthFeetGatePrice);
                draft.heavyDutyEndPostPrice = Number(fence?.heavyDutyEndPostPrice);
                draft.endPostPrice = Number(fence?.endPostPrice);
                draft.cornerPostPrice = Number(fence?.cornerPostPrice);
                draft.flatCapPrice = Number(fence?.flatCapPrice);
                draft.gothicCapPrice = Number(fence?.gothicCapPrice);
                draft.newEnglandCapPrice = Number(fence?.newEnglandCapPrice);
                draft.federationCapPrice = Number(fence?.federationCapPrice);
            });
        } else {
            setFormState(styleForm)
        }
    }, [isFormOpen, selectedStyleId]);

    const updateFormState = (recipe: (draft: typeof styleForm) => void) => {
        setFormState((prevState) => produce(prevState, recipe));
    };

    const handleCreate = (inputValue: string, type: string) => {
        const newOption = createSelectionOption(inputValue);

        switch (type) {
            case 'category':
                updateFormState(draft => { draft.category = newOption })
                break;
            case 'style':
                updateFormState(draft => { draft.style = newOption })
                break;
            case 'height':
                updateFormState(draft => { draft.height = newOption })
                break;
            case 'color':
                updateFormState(draft => { draft.color = newOption })
                break;
            case 'length':
                updateFormState(draft => { draft.length = newOption })
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPending(true);

        const form = document.querySelector('#styleForm') as HTMLFormElement;
        const formData = new FormData(form);
        const res = selectedStyleId === 0 ? await createStyle(formData) : await updateStyle(selectedStyleId, formData);

        if (res?.success) {
            setFormState(styleForm)
            setIsFormOpen(false)
            reToast.success(res?.message);
        } else {
            reToast.error(res?.message);
        }
        setPending(false);
    }

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => (setSelectedStyleId(0))} variant="outline" size="sm" className="h-8">
                    <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent size="2xl">
                <DialogHeader className="p-0">
                    <DialogTitle className="text-base font-medium text-default-700 ">
                        {selectedStyleId === 0 ? 'Create a New Style' : 'Edit Style'}
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <form id="styleForm" onSubmit={handleSubmit}>
                        <input type="hidden" name="userId" value={session?.user?.id ?? ''} />
                        <input type="hidden" name="categoryId" value={formState.categoryId ?? ''} />
                        <input type="hidden" name="styleId" value={formState.styleId ?? ''} />
                        <input type="hidden" name="colorId" value={formState.colorId ?? ''} />
                        <input type="hidden" name="heightId" value={formState.heightId ?? ''} />
                        <input type="hidden" name="lengthId" value={formState.lengthId ?? ''} />

                        <div className="h-[300px] sm:h-[600px] w-full">
                            <ScrollArea className="h-full">
                                <div className="hidden lg:block">
                                    <div className="grid grid-cols-12 gap-x-[30px] gap-y-4 ">
                                        <div className="flex justify-center col-span-12 lg:col-span-4">
                                            <div className=" w-[124px] h-[124px] relative rounded-full">
                                                <Image src={avatar} alt="avatar" className="object-cover w-full h-full rounded-full" priority={true} />
                                                <Button asChild
                                                    size="icon"
                                                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full cursor-pointer"
                                                >
                                                    <Label
                                                        htmlFor="image"
                                                    >
                                                        <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                                                    </Label>
                                                </Button>
                                                <Input type="file" className="hidden" id="image" name="image" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-8">
                                            <div className="col-span-12 lg:col-span-6">
                                                <Label htmlFor="category">Category Name</Label>
                                                <CreatableSelect
                                                    id="category"
                                                    name="category"
                                                    required={true}
                                                    isClearable
                                                    placeholder={'Type a new category or Choose from the list'}
                                                    styles={creatableSelectionStyles}
                                                    onChange={(newValue) => (updateFormState(draft => { draft.category = newValue }), updateFormState(draft => { draft.categoryId = newValue?.id }))}
                                                    onCreateOption={(inputValue) => handleCreate(inputValue, 'category')}
                                                    options={categoryOptions}
                                                    value={formState.category}
                                                />
                                            </div>
                                            <div className="col-span-12 mt-2 lg:col-span-6 ">
                                                <Label htmlFor="style">Style Name</Label>
                                                <CreatableSelect
                                                    id="style"
                                                    name="style"
                                                    required={true}
                                                    isClearable
                                                    placeholder={'Type a new style or Choose from the list'}
                                                    styles={creatableSelectionStyles}
                                                    onChange={(newValue) => (updateFormState(draft => { draft.style = newValue }), updateFormState(draft => { draft.styleId = newValue?.id }))}
                                                    onCreateOption={(inputValue) => handleCreate(inputValue, 'style')}
                                                    options={formState.styleOptions}
                                                    value={formState.style}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                name="height"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new height or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.height = newValue }), updateFormState(draft => { draft.heightId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'height')}
                                                options={formState.heightOptions}
                                                value={formState.height}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="color"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new color or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.color = newValue }), updateFormState(draft => { draft.colorId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'color')}
                                                options={formState.colorOptions}
                                                value={formState.color}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="length" >Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                name="length"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new length or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.length = newValue }), updateFormState(draft => { draft.lengthId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'length')}
                                                options={formState.lengthOptions}
                                                value={formState.length}
                                            />
                                        </div>
                                        {styleProperties.map((prop, index) => (<div key={index} className={clsx('col-span-12 lg:col-span-4', {
                                            'invisible':
                                                (prop.name === 'heavyDutyEndPostPrice' && formState.category?.value.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'cornerPostPrice' && formState.category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'endPostPrice' && formState.category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'flatCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'gothicCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'newEnglandCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'federationCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl')
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
                                        <div>
                                            <Label htmlFor="category">Category Name</Label>
                                            <CreatableSelect
                                                id="category"
                                                name="category"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new category or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.category = newValue }), updateFormState(draft => { draft.categoryId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'category')}
                                                options={categoryOptions}
                                                value={formState.category}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="style">Style Name</Label>
                                            <CreatableSelect
                                                id="style"
                                                name="style"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new style or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.style = newValue }), updateFormState(draft => { draft.styleId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'style')}
                                                options={formState.styleOptions}
                                                value={formState.style}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                name="height"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new height or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.height = newValue }), updateFormState(draft => { draft.heightId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'height')}
                                                options={formState.heightOptions}
                                                value={formState.height}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="color"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new color or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.color = newValue }), updateFormState(draft => { draft.colorId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'color')}
                                                options={formState.colorOptions}
                                                value={formState.color}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="length" >Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                name="length"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new length or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => (updateFormState(draft => { draft.length = newValue }), updateFormState(draft => { draft.lengthId = newValue?.id }))}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'length')}
                                                options={formState.lengthOptions}
                                                value={formState.length}
                                            />
                                        </div>
                                        {styleProperties.map((prop, index) => (<div key={index} className={clsx('col-span-12 lg:col-span-4', {
                                            'invisible':
                                                (prop.name === 'heavyDutyEndPostPrice' && formState.category?.value.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'cornerPostPrice' && formState.category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'endPostPrice' && formState.category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'flatCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'gothicCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'newEnglandCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'federationCapPrice' && formState.category?.value.toLowerCase() !== 'vinyl')
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
                            <Button disabled={pending} type="submit">{pending ? (selectedStyleId === 0 ? 'Creating...' : 'Editing...') : (selectedStyleId === 0 ? 'Create Style' : 'Edit Style')}</Button>
                        </div>
                    </form>
                </div >
            </DialogContent >
        </Dialog >
    );
}
