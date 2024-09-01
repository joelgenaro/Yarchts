"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { StyleProps } from "@/lib/interfaces";
import { useStyleStore } from "@/store/style";
import { Setup } from "./setup";
import { Labor } from "./labor";
import { Price } from "./price";

const StyleView = ({ styles }: StyleProps) => {
    const setStyles = useStyleStore((state) => state.setStyles);

    useEffect(() => {
        setStyles(styles);
    }, [styles]);

    return (
        <Card>
            <CardContent className="p-1 md:p-5">
                <Tabs defaultValue="setup" className="flex flex-col">
                    <TabsList className="mx-auto rounded-full mb-5">
                        <TabsTrigger
                            className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            value="setup"
                        >
                            <Icon icon="ph:list" className="h-5 w-5  mr-2 " />
                            Setup Your Styles
                        </TabsTrigger>
                        <TabsTrigger
                            value="labor"
                            className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            <Icon icon="ph:briefcase" className="h-5 w-5  mr-2 " />
                            Setup Labor
                        </TabsTrigger>
                        <TabsTrigger
                            value="price"
                            className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            <Icon icon="ph:currency-dollar" className="h-5 w-5  mr-2 " />
                            Our Prices
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value='setup'>
                        <Setup />
                    </TabsContent>
                    <TabsContent value='labor'>
                        <Labor />
                    </TabsContent>
                    <TabsContent value='price'>
                        <Price />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

export default StyleView;
