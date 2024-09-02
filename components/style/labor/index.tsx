import Card from "@/components/ui/card-snippet";
import StyleLabor from './style-labor'
import CategoryRemoval from "./category-removal";
import GateLabor from "./gate-labor";
import CommonSettings from "./common-settings";

export function Labor() {
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="Depends on Style - Installation">
                    <StyleLabor />
                </Card>
                <Card title="Depends on Category - Removal">
                    <CategoryRemoval />
                </Card>
                <Card title="Depends on Gate - Installation">
                    <GateLabor />
                </Card>
                <Card title="Common Settings">
                    <CommonSettings />
                </Card>
            </div>
        </div>
    )
}

export default Labor;