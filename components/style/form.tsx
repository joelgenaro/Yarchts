"use client";

import { useState } from "react";
import Select from "react-select";
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

interface OptionType {
    value: string;
    label: string;
    isFixed?: boolean;
    icon?: string;
}

const fruits: OptionType[] = [
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
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                    <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent size="3xl">
                <DialogHeader className="p-0">
                    <DialogTitle className="text-base font-medium text-default-700 ">
                        Create a New Style
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <div className="p-4">
                        <ScrollArea className="h-full">
                            <form>
                                <div className="hidden lg:block">
                                    <div className="grid grid-cols-12 gap-x-[30px] gap-y-4 ">
                                        <div className="col-span-12 lg:col-span-6">
                                            <Label htmlFor="category">Category</Label>
                                            <Select
                                                id="category"
                                                isClearable={false}
                                                styles={styles}
                                                name="colors"
                                                options={fruits}
                                                className="react-select"
                                                classNamePrefix="select"
                                            />
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <Label htmlFor="style">Style</Label>
                                            <Input type="text" id="style" placeholder="Style" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="height">Height</Label>
                                            <Input type="text" id="height" placeholder="Height" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="color">Color</Label>
                                            <Input type="text" id="color" placeholder="Color" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="length">Length</Label>
                                            <Input type="text" id="length" placeholder="Length" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="lft">$/Lft Price</Label>
                                            <Input type="text" id="lft" placeholder="$/Lft Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="3_feet">3 Feet Gate Price</Label>
                                            <Input type="text" id="3_feet" placeholder="3 Feet Gate Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="4_feet">4 Feet Gate Price</Label>
                                            <Input type="text" id="4_feet" placeholder="4 Feet Gate Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="5_feet">5 Feet Gate Price</Label>
                                            <Input type="text" id="5_feet" placeholder="5 Feet Gate Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="8_feet">8 Feet Gate Price</Label>
                                            <Input type="text" id="8_feet" placeholder="8 Feet Gate Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="10_feet">10 Feet Gate Price</Label>
                                            <Input type="text" id="10_feet" placeholder="10 Feet Gate Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="panel_price">Panel Price</Label>
                                            <Input type="text" id="panel_price" placeholder="Panel Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="post_price">Post Price</Label>
                                            <Input type="text" id="post_price" placeholder="Post Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="heavy_post">Heavy Duty End Posts Price</Label>
                                            <Input type="text" id="heavy_post" placeholder="Heavy Duty End Posts Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="end_posts">End Posts</Label>
                                            <Input type="text" id="end_posts" placeholder="End Posts" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="corner_posts">Corner Posts</Label>
                                            <Input type="text" id="corner_posts" placeholder="Corner Posts" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="flat_cap">Flat Cap Price</Label>
                                            <Input type="text" id="flat_cap" placeholder="Flat Cap Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="gothic_cap">Gothic Cap Price</Label>
                                            <Input type="text" id="gothic_cap" placeholder="Gothic Cap Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="new_england_cap">New England Cap Price</Label>
                                            <Input type="text" id="new_england_cap" placeholder="New England Cap Price" />
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <Label htmlFor="federation_cap">Federation Cap Price</Label>
                                            <Input type="text" id="federation_cap" placeholder="Federation Cap Price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="block lg:hidden">
                                    <div className="flex flex-col gap-4">
                                        <Input type="text" placeholder="Full Name" />
                                        <Input type="email" placeholder="Email Address" />
                                        <Input type="password" placeholder="Password" />
                                        <Input type="number" placeholder="Phone number" />
                                        <Input type="text" placeholder="City" />
                                        <Input type="text" placeholder="State" />
                                        <Input type="text" placeholder="Counter" />
                                        <Input type="number" placeholder="Zip Code" />
                                        <Input type="text" placeholder="Optional" />
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
