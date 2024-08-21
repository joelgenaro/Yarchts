"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom"
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
import { createSelectionOption } from "@/lib/utils";
import { CreatableSelectionOptions } from "@/lib/interfaces";
import { Icon } from '@iconify/react';
import { createStyle } from "@/actions/style";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import CreatableSelect from 'react-select/creatable';
import Image from "next/image";
import avatar from "@/public/images/avatar/user.png";
import clsx from 'clsx';
import { ValidStylePropNames } from '@/lib/types';
import { useSession } from "next-auth/react";

export function StyleForm() {
    const { data: session } = useSession();
    console.log(session)
    const [categoryId, setCategoryId] = useState<string>();
    const [category, setCategory] = useState<CreatableSelectionOptions | null>();
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [styleId, setStyleId] = useState<string>();
    const [style, setStyle] = useState<CreatableSelectionOptions | null>();
    const [styleOptions, setStyleOptions] = useState([]);
    const [heightId, setHeightId] = useState<string>();
    const [height, setHeight] = useState<CreatableSelectionOptions | null>();
    const [heightOptions, setHeightOptions] = useState([]);
    const [colorId, setColorId] = useState<string>();
    const [color, setColor] = useState<CreatableSelectionOptions | null>();
    const [colorOptions, setColorOptions] = useState([]);
    const [lengthId, setLengthId] = useState<string>();
    const [length, setLength] = useState<CreatableSelectionOptions | null>();
    const [lengthOptions, setLengthOptions] = useState([]);
    const { pending } = useFormStatus();

    const handleCreate = (inputValue: string, type: string) => {
        const newOption = createSelectionOption(inputValue);

        switch (type) {
            case 'category':
                setCategory(newOption);
                break;
            case 'style':
                setStyle(newOption);
                break;
            case 'height':
                setHeight(newOption);
                break;
            case 'color':
                setColor(newOption);
                break;
            case 'length':
                setLength(newOption);
                break;
            default:
                break;
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                    <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent size="2xl">
                <DialogHeader className="p-0">
                    <DialogTitle className="text-base font-medium text-default-700 ">
                        Create a New Style
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <form action={createStyle}>
                        <input type="hidden" name="userId" value={session?.user?.id ?? ''} />
                        <input type="hidden" name="categoryId" value={categoryId} />
                        <input type="hidden" name="styleId" value={styleId} />
                        <input type="hidden" name="colorId" value={colorId} />
                        <input type="hidden" name="heightId" value={heightId} />
                        <input type="hidden" name="lengthId" value={lengthId} />

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
                                                    onChange={(newValue) => (setCategory(newValue), setCategoryId(newValue?.id ?? ''))}
                                                    onCreateOption={(inputValue) => handleCreate(inputValue, 'category')}
                                                    options={categoryOptions}
                                                    value={category}
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
                                                    onChange={(newValue) => setStyle(newValue)}
                                                    onCreateOption={(inputValue) => handleCreate(inputValue, 'style')}
                                                    options={styleOptions}
                                                    value={style}
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
                                                onChange={(newValue) => setHeight(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'height')}
                                                options={heightOptions}
                                                value={height}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="length"
                                                required={true}
                                                isClearable
                                                placeholder={'Type a new color or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => setColor(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'color')}
                                                options={colorOptions}
                                                value={color}
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
                                                onChange={(newValue) => setLength(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'length')}
                                                options={lengthOptions}
                                                value={length}
                                            />
                                        </div>
                                        {styleProperties.map((prop, index) => (<div key={index} className={clsx('col-span-12 lg:col-span-4', {
                                            'invisible':
                                                (prop.name === 'heavyDutyEndPostPrice' && category?.value.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'cornerPostPrice' && category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'endPostPrice' && category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'flatCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'gothicCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'newEnglandCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'federationCapPrice' && category?.value.toLowerCase() !== 'vinyl')
                                        })}>
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" defaultValue={0} name={prop.name} id={prop.name} />
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
                                                onChange={(newValue) => setCategory(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'category')}
                                                options={categoryOptions}
                                                value={category}
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
                                                onChange={(newValue) => setStyle(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'style')}
                                                options={styleOptions}
                                                value={style}
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
                                                onChange={(newValue) => setHeight(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'height')}
                                                options={heightOptions}
                                                value={height}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="color"
                                                required={true}
                                                isClearable
                                                placeholder={'Pick a new color or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => setColor(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'color')}
                                                options={colorOptions}
                                                value={color}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="length">Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                name="panelPrice"
                                                isClearable
                                                required={true}
                                                placeholder={'Type a new length or Choose from the list'}
                                                styles={creatableSelectionStyles}
                                                onChange={(newValue) => setLength(newValue)}
                                                onCreateOption={(inputValue) => handleCreate(inputValue, 'length')}
                                                options={lengthOptions}
                                                value={length}
                                            />
                                        </div>

                                        {styleProperties.map((prop, index) => (<div key={index} className={clsx({
                                            'invisible':
                                                (prop.name === 'heavyDutyEndPostPrice' && category?.value.toLowerCase() !== 'aluminum') ||
                                                (prop.name === 'cornerPostPrice' && category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'endPostPrice' && category?.value.toLowerCase() !== 'chain link') ||
                                                (prop.name === 'flatCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'gothicCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'newEnglandCapPrice' && category?.value.toLowerCase() !== 'vinyl') ||
                                                (prop.name === 'federationCapPrice' && category?.value.toLowerCase() !== 'vinyl')
                                        })}>
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" defaultValue={0} name={prop.name} id={prop.name} />
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
                            <Button aria-disabled={pending} type="submit">{pending ? "Creating..." : "Create Style"}</Button>
                        </div>
                    </form>
                </div >
            </DialogContent >
        </Dialog >
    );
}
