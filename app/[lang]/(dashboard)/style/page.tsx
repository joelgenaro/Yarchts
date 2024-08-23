import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "@/components/style/columns";
import { StyleView } from "@/components/style/view";
import { data } from "@/components/style/data";
import { getStyles } from "@/actions/style";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";

const StylePage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);
  const styles = await getStyles(session?.user?.id);

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
