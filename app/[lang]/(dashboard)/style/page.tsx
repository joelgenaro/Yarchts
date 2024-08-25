import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StyleView } from "@/components/style/view";
import { getStyles } from "@/actions/style";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { Style } from "@/lib/interfaces";
import { UserSession } from "@/lib/interfaces";

const StylePage = async () => {
  const session: UserSession = await getServerSession(authOptions as NextAuthOptions) as UserSession;
  const styles = await getStyles(session?.user?.id) as Style[];

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Your Styles</CardTitle>
        </CardHeader>
        <CardContent >
          <StyleView
            styles={styles}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StylePage;
