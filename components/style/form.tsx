import * as React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StyleForm() {

    return (
        <>
            <Button variant="outline" size="sm" className="h-8">
                <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                Add
            </Button>
        </>
    );
}
