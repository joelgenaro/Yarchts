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
import { CreatableSelectionOptions, UserSession } from "@/lib/interfaces";
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
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { getFence } from "@/lib/utils";

const schema = z.object({
    category: z.object({
        id: z.number().optional(),
        value: z.string().nonempty(''),
        label: z.string(),
    }).nullable().refine(val => val !== null, ''),
    style: z.object({
        id: z.number().optional(),
        value: z.string().nonempty(''),
        label: z.string(),
    }).nullable().refine(val => val !== null, ''),
    color: z.object({
        id: z.number().optional(),
        value: z.string().nonempty(''),
        label: z.string(),
    }).nullable().refine(val => val !== null, ''),
    height: z.object({
        id: z.number().optional(),
        value: z.string().nonempty(''),
        label: z.string(),
    }).nullable().refine(val => val !== null, ''),
    length: z.object({
        id: z.number().optional(),
        value: z.string().nonempty(''),
        label: z.string(),
    }).nullable().refine(val => val !== null, ''),
    panelPrice: z.coerce.number().nonnegative(),
    postPrice: z.coerce.number().nonnegative(),
    lftPrice: z.coerce.number().nonnegative(),
    thirdFeetGatePrice: z.coerce.number().nonnegative(),
    foruthFeetGatePrice: z.coerce.number().nonnegative(),
    fifthFeetGatePrice: z.coerce.number().nonnegative(),
    eighthFeetGatePrice: z.coerce.number().nonnegative(),
    tenthFeetGatePrice: z.coerce.number().nonnegative(),
    heavyDutyEndPostPrice: z.coerce.number().nonnegative(),
    endPostPrice: z.coerce.number().nonnegative(),
    cornerPostPrice: z.coerce.number().nonnegative(),
    flatCapPrice: z.coerce.number().nonnegative(),
    gothicCapPrice: z.coerce.number().nonnegative(),
    newEnglandCapPrice: z.coerce.number().nonnegative(),
    federationCapPrice: z.coerce.number().nonnegative(),
});

export function StyleForm() {
    const styles = useStyleStore((state) => state.styles);
    const isFormOpen = useStyleStore((state) => state.isFormOpen);
    const setIsFormOpen = useStyleStore((state) => state.setIsFormOpen);
    const selectedStyleId = useStyleStore((state) => state.selectedStyleId);
    const setSelectedStyleId = useStyleStore((state) => state.setSelectedStyleId);
    const [session, setSession] = useState<UserSession>(useSession().data as UserSession);
    const [isPending, startTransition] = useTransition();
    const [styleOptions, setStyleOptions] = useState<CreatableSelectionOptions[]>([]);
    const [heightOptions, setHeightOptions] = useState<CreatableSelectionOptions[]>([]);
    const [colorOptions, setColorOptions] = useState<CreatableSelectionOptions[]>([]);
    const [lengthOptions, setLengthOptions] = useState<CreatableSelectionOptions[]>([]);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        getValues,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const categoryOptions = useMemo(() => {
        return getCategoryOptions(styles)
    }, [styles]);

    const category = useWatch({ control, name: 'category' });

    useEffect(() => {
        if (category?.id) {
            const { styleOption, colorOption, heightOption, lengthOption } = getStyleOptions(styles, category?.id);

            setValue('style', {} as CreatableSelectionOptions);
            setValue('color', {} as CreatableSelectionOptions);
            setValue('height', {} as CreatableSelectionOptions);
            setValue('length', {} as CreatableSelectionOptions);
            setStyleOptions(styleOption);
            setColorOptions(colorOption);
            setHeightOptions(heightOption);
            setLengthOptions(lengthOption);
        }
    }, [category])

    useEffect(() => {
        if (selectedStyleId) {
            const fence = getFence(selectedStyleId, styles);

            setValue('category', categoryOptions.find(option => option.id === fence?.categoryId) as CreatableSelectionOptions);
            setValue('style', styleOptions.find(option => option.id === fence?.styleId) as CreatableSelectionOptions);
            setValue('color', colorOptions.find(option => option.id === fence?.colorId) as CreatableSelectionOptions);
            setValue('height', heightOptions.find(option => option.id === fence?.heightId) as CreatableSelectionOptions);
            setValue('length', lengthOptions.find(option => option.id === fence?.lengthId) as CreatableSelectionOptions);
            setValue('panelPrice', Number(fence?.panelPrice))
            setValue('postPrice', Number(fence?.postPrice))
            setValue('lftPrice', Number(fence?.lftPrice))
            setValue('thirdFeetGatePrice', Number(fence?.thirdFeetGatePrice))
            setValue('foruthFeetGatePrice', Number(fence?.foruthFeetGatePrice))
            setValue('fifthFeetGatePrice', Number(fence?.fifthFeetGatePrice))
            setValue('eighthFeetGatePrice', Number(fence?.eighthFeetGatePrice))
            setValue('tenthFeetGatePrice', Number(fence?.tenthFeetGatePrice))
            setValue('heavyDutyEndPostPrice', Number(fence?.heavyDutyEndPostPrice))
            setValue('endPostPrice', Number(fence?.endPostPrice))
            setValue('cornerPostPrice', Number(fence?.cornerPostPrice))
            setValue('flatCapPrice', Number(fence?.flatCapPrice))
            setValue('gothicCapPrice', Number(fence?.gothicCapPrice))
            setValue('newEnglandCapPrice', Number(fence?.newEnglandCapPrice))
            setValue('federationCapPrice', Number(fence?.federationCapPrice))
        } else {
            reset()
        }
    }, [isFormOpen]);

    const onSubmit = (data: z.infer<typeof schema>) => {


        setIsFormOpen(false);
        reset();
    };

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                    <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent size="2xl">
                <DialogHeader className="p-0">
                    <DialogTitle className="text-base font-medium text-default-700 ">
                        {selectedStyleId !== 0 ? 'Create a New Style' : 'Edit Style'}
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
                                                <Label htmlFor="category" className={cn("", {
                                                    "text-destructive": errors.category,
                                                })}>Category Name</Label>
                                                <Controller
                                                    name="category"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CreatableSelect
                                                            {...field}
                                                            isClearable
                                                            placeholder={'Type a new category or Choose from the list'}
                                                            styles={creatableSelectionStyles}
                                                            options={categoryOptions}
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className="col-span-12 mt-2 lg:col-span-6 ">
                                                <Label htmlFor="style" className={cn("", {
                                                    "text-destructive": errors.style,
                                                })}>Style Name</Label>
                                                <Controller
                                                    name="style"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CreatableSelect
                                                            {...field}
                                                            isClearable
                                                            placeholder={'Type a new style or Choose from the list'}
                                                            styles={creatableSelectionStyles}
                                                            options={styleOptions}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height" className={cn("", {
                                                "text-destructive": errors.height,
                                            })}>Panel Height ( in foot )</Label>
                                            <Controller
                                                name="height"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new height or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={heightOptions}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color" className={cn("", {
                                                "text-destructive": errors.color,
                                            })}>Fence Color</Label>
                                            <Controller
                                                name="color"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new color or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={colorOptions}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="length" className={cn("", {
                                                "text-destructive": errors.length,
                                            })}>Panel Length ( in foot )</Label>
                                            <Controller
                                                name="length"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new length or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={lengthOptions}
                                                    />
                                                )}
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
                                            <Label htmlFor={prop.name} className={cn("", {
                                                "text-destructive": errors[prop.name],
                                            })}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" {...register(prop.name)}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors[prop.name],
                                                    })} name={prop.name} id={prop.name} />
                                            </InputGroup>
                                        </div>))}

                                    </div>
                                </div>
                                <div className="block lg:hidden">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <Label htmlFor="category" className={cn("", {
                                                "text-destructive": errors.category,
                                            })}>Category Name</Label>
                                            <Controller
                                                name="category"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new category or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={categoryOptions}
                                                    />
                                                )}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="style" className={cn("", {
                                                "text-destructive": errors.style,
                                            })}>Style Name</Label>
                                            <Controller
                                                name="style"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new style or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={styleOptions}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="height" className={cn("", {
                                                "text-destructive": errors.height,
                                            })}>Panel Height ( in foot )</Label>
                                            <Controller
                                                name="height"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new height or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={heightOptions}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="color" className={cn("", {
                                                "text-destructive": errors.color,
                                            })}>Fence Color</Label>
                                            <Controller
                                                name="color"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new color or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={colorOptions}
                                                    />
                                                )}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="length" className={cn("", {
                                                "text-destructive": errors.length,
                                            })}>Panel Length ( in foot )</Label>
                                            <Controller
                                                name="length"
                                                control={control}
                                                render={({ field }) => (
                                                    <CreatableSelect
                                                        {...field}
                                                        isClearable
                                                        placeholder={'Type a new length or Choose from the list'}
                                                        styles={creatableSelectionStyles}
                                                        options={lengthOptions}
                                                    />
                                                )}
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
                                            <Label htmlFor={prop.name} className={cn("", {
                                                "text-destructive": errors[prop.name],
                                            })}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="number" {...register(prop.name)}
                                                    className={cn("", {
                                                        "border-destructive focus:border-destructive": errors[prop.name],
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
                            <Button disabled={isPending} type="submit">{isPending ? (selectedStyleId === 0 ? 'Creating...' : 'Editing...') : (selectedStyleId === 0 ? 'Create Style' : 'Edit Style')}</Button>
                        </div>
                    </form>
                </div >
            </DialogContent >
        </Dialog >
    );
}
