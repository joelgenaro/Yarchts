import { getStyles } from "@/actions/style";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { Style } from "@/lib/interfaces";
import { UserSession } from "@/lib/interfaces";
import StyleView from "@/components/style/view";

const StylePage = async () => {
  const session: UserSession = await getServerSession(authOptions as NextAuthOptions) as UserSession;
  const styles = await getStyles(session?.user?.id) as Style[];

  return (
    <div className="space-y-5">
      <StyleView styles={styles} />
    </div>
  );
};

export default StylePage;
