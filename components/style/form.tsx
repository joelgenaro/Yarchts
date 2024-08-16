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
import { Icon } from '@iconify/react';

interface OptionType {
    value: string;
    label: string;
    isFixed?: boolean;
    icon?: string;
}

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions: OptionType[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "orange", label: "Orange" },
    { value: "apple", label: "Apple" },
];

const styles = {
    multiValue: (base: any, state: any) => {
        return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
    },
    multiValueLabel: (base: any, state: any) => {
        return state.data.isFixed
            ? { ...base, color: "#626262", paddingRight: 6 }
            : base;
    },
    multiValueRemove: (base: any, state: any) => {
        return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    option: (provided: any, state: any) => ({
        ...provided,
        fontSize: "14px",
    }),
};

export function StyleForm() {
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState<OptionType | null>();

    const handleCreate = (inputValue: string) => {
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setOptions((prev) => [...prev, newOption]);
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
            <DialogContent size="4xl">
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
                                        <div className="col-span-12 lg:col-span-6">
                                            <Label htmlFor="category">Category Name</Label>
                                            <CreatableSelect
                                                id="category"
                                                name="category"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={styles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <Label htmlFor="style">Style Name</Label>
                                            <CreatableSelect
                                                id="style"
                                                name="style"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={styles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height">Panel Height ( in foot )</Label>
                                            <CreatableSelect
                                                id="height"
                                                name="height"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={styles}
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
                                                placeholder={'Type or Choose from the list'}
                                                styles={styles}
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
                                                name="length"
                                                isClearable
                                                placeholder={'Type or Choose from the list'}
                                                styles={styles}
                                                onChange={(newValue) => setValue(newValue)}
                                                onCreateOption={handleCreate}
                                                options={options}
                                                value={value}
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="lft">$/Lft Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" placeholder="Your $/Lft Price" id="lft" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="3_feet">3 Feet Gate Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="3_feet" placeholder="Your Gate Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="4_feet">4 Feet Gate Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="4_feet" placeholder="Your Gate Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="5_feet">5 Feet Gate Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="5_feet" placeholder="Your Gate Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="8_feet">8 Feet Gate Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="8_feet" placeholder="Your Gate Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="10_feet">10 Feet Gate Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="10_feet" placeholder="Yourt Gate Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="panel_price">Panel Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="panel_price" placeholder="Your Panel Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="post_price">Post Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="post_price" placeholder="Your Post Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="heavy_post">Heavy Duty End Post Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="heavy_post" placeholder="Your Post Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="end_posts">End Posts</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="end_posts" placeholder="Your Post Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="corner_posts">Corner Posts</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="corner_posts" placeholder="Your Post Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="flat_cap">Flat Cap Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="flat_cap" placeholder="Your Cap Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="gothic_cap">Gothic Cap Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="gothic_cap" placeholder="Your Cap Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="new_england_cap">New England Cap Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="new_england_cap" placeholder="Your Cap Price" />
                                            </InputGroup>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="federation_cap">Federation Cap Price</Label>
                                            <InputGroup merged>
                                                <InputGroupText>
                                                    <Icon icon="mdi:dollar" />
                                                </InputGroupText>
                                                <Input type="text" id="federation_cap" placeholder="Your Cap Price" />
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="block lg:hidden">
                                    <div className="flex flex-col gap-4">
                                        <Label htmlFor="category">Category Name</Label>
                                        <CreatableSelect
                                            id="category"
                                            name="category"
                                            isClearable
                                            placeholder={'Type or Choose from the list'}
                                            styles={styles}
                                            onChange={(newValue) => setValue(newValue)}
                                            onCreateOption={handleCreate}
                                            options={options}
                                            value={value}
                                        />
                                        <Label htmlFor="style">Style Name</Label>
                                        <CreatableSelect
                                            id="style"
                                            name="style"
                                            isClearable
                                            placeholder={'Type or Choose from the list'}
                                            styles={styles}
                                            onChange={(newValue) => setValue(newValue)}
                                            onCreateOption={handleCreate}
                                            options={options}
                                            value={value}
                                        />
                                        <Label htmlFor="height">Panel Height ( in foot )</Label>
                                        <CreatableSelect
                                            id="height"
                                            name="height"
                                            isClearable
                                            placeholder={'Type or Choose from the list'}
                                            styles={styles}
                                            onChange={(newValue) => setValue(newValue)}
                                            onCreateOption={handleCreate}
                                            options={options}
                                            value={value}
                                        />
                                        <Label htmlFor="color">Fence Color</Label>
                                        <CreatableSelect
                                            id="color"
                                            name="color"
                                            isClearable
                                            placeholder={'Type or Choose from the list'}
                                            styles={styles}
                                            onChange={(newValue) => setValue(newValue)}
                                            onCreateOption={handleCreate}
                                            options={options}
                                            value={value}
                                        />
                                        <Label htmlFor="length">Panel Length ( in foot )</Label>
                                        <CreatableSelect
                                            id="length"
                                            name="length"
                                            isClearable
                                            placeholder={'Type or Choose from the list'}
                                            styles={styles}
                                            onChange={(newValue) => setValue(newValue)}
                                            onCreateOption={handleCreate}
                                            options={options}
                                            value={value}
                                        />
                                        <Label htmlFor="lft">$/Lft Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" placeholder="Your $/Lft Price" id="lft" />
                                        </InputGroup>
                                        <Label htmlFor="3_feet">3 Feet Gate Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="3_feet" placeholder="Your Gate Price" />
                                        </InputGroup>
                                        <Label htmlFor="4_feet">4 Feet Gate Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="4_feet" placeholder="Your Gate Price" />
                                        </InputGroup>
                                        <Label htmlFor="5_feet">5 Feet Gate Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="5_feet" placeholder="Your Gate Price" />
                                        </InputGroup>
                                        <Label htmlFor="8_feet">8 Feet Gate Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="8_feet" placeholder="Your Gate Price" />
                                        </InputGroup>
                                        <Label htmlFor="10_feet">10 Feet Gate Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="10_feet" placeholder="Yourt Gate Price" />
                                        </InputGroup>
                                        <Label htmlFor="panel_price">Panel Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="panel_price" placeholder="Your Panel Price" />
                                        </InputGroup>
                                        <Label htmlFor="post_price">Post Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="post_price" placeholder="Your Post Price" />
                                        </InputGroup>
                                        <Label htmlFor="heavy_post">Heavy Duty End Post Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="heavy_post" placeholder="Your Post Price" />
                                        </InputGroup>
                                        <Label htmlFor="end_posts">End Posts</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="end_posts" placeholder="Your Post Price" />
                                        </InputGroup>
                                        <Label htmlFor="corner_posts">Corner Posts</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="corner_posts" placeholder="Your Post Price" />
                                        </InputGroup>
                                        <Label htmlFor="flat_cap">Flat Cap Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="flat_cap" placeholder="Your Cap Price" />
                                        </InputGroup>
                                        <Label htmlFor="gothic_cap">Gothic Cap Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="gothic_cap" placeholder="Your Cap Price" />
                                        </InputGroup>
                                        <Label htmlFor="new_england_cap">New England Cap Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="new_england_cap" placeholder="Your Cap Price" />
                                        </InputGroup>
                                        <Label htmlFor="federation_cap">Federation Cap Price</Label>
                                        <InputGroup merged>
                                            <InputGroupText>
                                                <Icon icon="mdi:dollar" />
                                            </InputGroupText>
                                            <Input type="text" id="federation_cap" placeholder="Your Cap Price" />
                                        </InputGroup>
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
                </div>
            </DialogContent>
        </Dialog>
    );
}
