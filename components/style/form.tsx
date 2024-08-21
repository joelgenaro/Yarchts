"use client";

import { useEffect, useState, useActionState } from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import CreatableSelect from 'react-select/creatable';
import Image from "next/image";
import avatar from "@/public/images/avatar/avatar-3.jpg";
import clsx from 'clsx';
import { ValidStylePropNames } from '@/lib/types';

const schema = z.object({
    category: z.object({
        value: z.string(),
        label: z.string(),
    }),
    style: z.object({
        value: z.string(),
        label: z.string(),
    }),
    color: z.object({
        value: z.string(),
        label: z.string(),
    }),
    height: z.object({
        value: z.string(),
        label: z.string(),
    }),
    length: z.object({
        value: z.string(),
        label: z.string(),
    }),
    lftPrice: z.number(),
    thirdFeetGatePrice: z.number(),
    foruthFeetGatePrice: z.number(),
    fifthFeetGatePrice: z.number(),
    eighthFeetGatePrice: z.number(),
    tenthFeetGatePrice: z.number(),
    panelPrice: z.number(),
    postPrice: z.number(),
    heavyDutyEndPostPrice: z.number(),
    endPostPrice: z.number(),
    cornerPostPrice: z.number(),
    flatCapPrice: z.number(),
    gothicCapPrice: z.number(),
    newEnglandCapPrice: z.number(),
    federationCapPrice: z.number(),
});

export function StyleForm() {
    const [category, setCategory] = useState<CreatableSelectionOptions | null>();
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [style, setStyle] = useState<CreatableSelectionOptions | null>();
    const [styleOptions, setStyleOptions] = useState([]);
    const [height, setHeight] = useState<CreatableSelectionOptions | null>();
    const [heightOptions, setHeightOptions] = useState([]);
    const [color, setColor] = useState<CreatableSelectionOptions | null>();
    const [colorOptions, setColorOptions] = useState([]);
    const [length, setLength] = useState<CreatableSelectionOptions | null>();
    const [lengthOptions, setLengthOptions] = useState([]);

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

    useEffect(() => { console.log(category) }, [category]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    function onSubmit(data: z.infer<typeof schema>) {
        console.log(JSON.stringify(data, null, 2));
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                                        htmlFor="avatar"
                                                    >
                                                        <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                                                    </Label>
                                                </Button>
                                                <Input type="file" className="hidden" id="avatar" name="photoPath" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-8">
                                            <div className="col-span-12 lg:col-span-6">
                                                <Label htmlFor="category" className={cn("", {
                                                    "text-destructive": errors.category,
                                                })}>Category Name</Label>
                                                <CreatableSelect
                                                    id="category"
                                                    {...register("category")}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors.category,
                                                    })}
                                                    isClearable
                                                    placeholder={'Type a new category or Choose from the list'}
                                                    styles={creatableSelectionStyles}
                                                    onChange={(newValue) => setCategory(newValue)}
                                                    onCreateOption={(inputValue) => handleCreate(inputValue, 'category')}
                                                    options={categoryOptions}
                                                    value={category}
                                                />
                                            </div>
                                            <div className="col-span-12 mt-2 lg:col-span-6 ">
                                                <Label htmlFor="style" className={cn("", {
                                                    "text-destructive": errors.style,
                                                })}>Style Name</Label>
                                                <CreatableSelect
                                                    id="style"
                                                    {...register("style")}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors.style,
                                                    })}
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
                                            <Label htmlFor="height" className={cn("", {
                                                "text-destructive": errors.height,
                                            })}>Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                {...register("height")}
                                                className={cn("", {
                                                    "border-destructive focus:border-destructive": errors.height,
                                                })}
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
                                            <Label htmlFor="color" className={cn("", {
                                                "text-destructive": errors.color,
                                            })}>Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                {...register("color")}
                                                className={cn("", {
                                                    "border-destructive focus:border-destructive": errors.color,
                                                })}
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
                                            <Label htmlFor="length" className={cn("", {
                                                "text-destructive": errors.length,
                                            })}>Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                {...register("length")}
                                                className={cn("", {
                                                    "border-destructive focus:border-destructive": errors.length,
                                                })}
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
                                            <Label className={cn("", {
                                                "text-destructive": errors[prop.name as ValidStylePropNames],
                                            })} htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input {...register(prop.name as ValidStylePropNames)}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors[prop.name as ValidStylePropNames],
                                                    })} type="number" name={prop.name} id={prop.name} />
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
                                            <Label className={cn("", {
                                                "text-destructive": errors[prop.name as ValidStylePropNames],
                                            })} htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" {...register(prop.name as ValidStylePropNames)}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors[prop.name as ValidStylePropNames],
                                                    })} name={prop.name} id={prop.name} />
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
                            <Button type="submit">Create Style</Button>
                        </div>
                    </form>
                </div >
            </DialogContent >
        </Dialog >
    );
}
