"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "./components/columns";
import { StyleView } from "./components/style-view";
import { data } from "./data";

const StylePage = () => {

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Your Styles</CardTitle>
        </CardHeader>
        <CardContent >
          <StyleView
            data={data}
            columns={columns}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StylePage;
