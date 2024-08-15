
const TableRowSkeleton = () => {
    return (
        <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
            {/* Customer Name and Image */}
            < td className="relative py-3 pl-6 pr-3 overflow-hidden whitespace-nowrap" >
                <div className="flex items-center gap-3" >
                    <div className="w-8 h-8 bg-gray-100 rounded-full" > </div>
                    < div className="w-24 h-6 bg-gray-100 rounded" > </div>
                </div>
            </td>
            {/* Email */}
            <td className="px-3 py-3 whitespace-nowrap" >
                <div className="w-32 h-6 bg-gray-100 rounded" > </div>
            </td>
            {/* Amount */}
            <td className="px-3 py-3 whitespace-nowrap" >
                <div className="w-16 h-6 bg-gray-100 rounded" > </div>
            </td>
            {/* Date */}
            <td className="px-3 py-3 whitespace-nowrap" >
                <div className="w-16 h-6 bg-gray-100 rounded" > </div>
            </td>
            {/* Status */}
            <td className="px-3 py-3 whitespace-nowrap" >
                <div className="w-16 h-6 bg-gray-100 rounded" > </div>
            </td>
            {/* Actions */}
            <td className="py-3 pl-6 pr-3 whitespace-nowrap" >
                <div className="flex justify-end gap-3" >
                    <div className="h-[38px] w-[38px] rounded bg-gray-100" > </div>
                    < div className="h-[38px] w-[38px] rounded bg-gray-100" > </div>
                </div>
            </td>
        </tr>
    );
}

export default TableRowSkeleton;