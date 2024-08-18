"use client";

import { useState } from "react";
import CreatableSelect from 'react-select/creatable';
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
import { createableSelectionStyles, styleProperties } from "@/lib/constants";
import { CreateableSelectionOptions } from "@/lib/interfaces";
import { createSelectionOption } from "@/lib/utils";
import { Icon } from '@iconify/react';
import Image from "next/image";
import avatar from "@/public/images/avatar/avatar-3.jpg"

const defaultOptions: CreateableSelectionOptions[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "orange", label: "Orange" },
    { value: "apple", label: "Apple" },
];

export function StyleForm() {
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState<CreateableSelectionOptions | null>();

    const handleCreate = (inputValue: string) => {
        setTimeout(() => {
            const newOption = createSelectionOption(inputValue);
            setValue(newOption);
        }, 1000);
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
                    <div className="h-[300px] sm:h-[600px] w-full">
                        <ScrollArea className="h-full">
                            <form>
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
                                                <Label htmlFor="category">Category Name</Label>
                                                <CreatableSelect
                                                    id="category"
                                                    name="category"
                                                    isClearable
                                                    placeholder={'Type a new category or Choose from the list'}
                                                    styles={createableSelectionStyles}
                                                    onChange={(newValue) => setValue(newValue)}
                                                    onCreateOption={handleCreate}
                                                    options={options}
                                                    value={value}
                                                />
                                            </div>
                                            <div className="col-span-12 mt-2 lg:col-span-6 ">
                                                <Label htmlFor="style">Style Name</Label>
                                                <CreatableSelect
                                                    id="style"
                                                    name="style"
                                                    isClearable
                                                    placeholder={'Type a new style or Choose from the list'}
                                                    styles={createableSelectionStyles}
                                                    onChange={(newValue) => setValue(newValue)}
                                                    onCreateOption={handleCreate}
                                                    options={options}
                                                    value={value}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                name="height"
                                                isClearable
                                                placeholder={'Type a new height or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="color"
                                                isClearable
                                                placeholder={'Pick a new color or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="length">Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                name="panelPrice"
                                                isClearable
                                                placeholder={'Type a new length or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        {styleProperties.map((prop, index) => (<div key={index} className="col-span-12 lg:col-span-4">
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" name={prop.name} id={prop.name} />
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
                                                placeholder={'Type or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="style">Style Name</Label>
                                            <CreatableSelect
                                                id="style"
                                                name="style"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                name="height"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="color">Fence Color</Label>
                                            <CreatableSelect
                                                id="color"
                                                name="color"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="length">Panel Length ( in foot )</Label>
                                            <CreatableSelect
                                                id="length"
                                                name="length"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={createableSelectionStyles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>

                                        {styleProperties.map((prop, index) => (<div key={index}>
                                            <Label htmlFor={prop.name}>{prop.label}</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" name={prop.name} id={prop.name} />
                                            </InputGroup>
                                        </div>))}

                                    </div>
                                </div>
                            </form>
                        </ScrollArea>
                    </div>

                    <div className="flex justify-center gap-3">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="button">Create Style </Button>
                    </div>
                </div >
            </DialogContent >
        </Dialog >
    );
}
