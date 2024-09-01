import Card from "@/components/ui/card-snippet";
import StyleLabor from './style-labor'

export function Labor() {
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="Depends on Style - Installation">
                    <StyleLabor />
                </Card>
                {/* <Card title="Depends on Category - Removal">
                    <VFormWithIcon />
                </Card>
                <Card title="Depends on Gate - Installation">
                    <VFormWithIcon />
                </Card>
                <Card title="Common Settings">
                    <VFormWithIcon />
                </Card> */}
            </div>
        </div>
    )
}

export default Labor;