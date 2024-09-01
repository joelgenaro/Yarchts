import { getStyles } from "@/actions/style";
import { getGates } from "@/actions/gate";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { Style } from "@/lib/interfaces";
import { UserSession } from "@/lib/interfaces";
import { GateSelect } from "@/db/schemas/gates";
import StyleView from "@/components/style/view";

const StylePage = async () => {
  const session: UserSession = await getServerSession(authOptions as NextAuthOptions) as UserSession;
  const styles = await getStyles(session?.user?.id) as Style[];
  const gates = await getGates(session?.user?.id) as GateSelect[];

  return (
    <div className="space-y-5">
      <StyleView styles={styles} gates={gates} />
    </div>
  );
};

export default StylePage;
