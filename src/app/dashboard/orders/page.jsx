import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Search, ChevronLeft, ChevronRight } from "lucide-react"

export default function OrderListPage() {
  return (
    (<div>
      <h1 className="text-2xl font-bold mb-6">My Order List</h1>
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 flex gap-2">
            <Input placeholder="Search orders..." className="max-w-xs" />
            <Button size="icon" variant="outline">
              <Search size={18} />
            </Button>
          </div>

          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Amount</SelectItem>
                <SelectItem value="lowest">Lowest Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-500">#Order No</th>
                <th className="py-3 px-4 font-medium text-gray-500">Purchased Date</th>
                <th className="py-3 px-4 font-medium text-gray-500">Total</th>
                <th className="py-3 px-4 font-medium text-gray-500">Status</th>
                <th className="py-3 px-4 font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderRow
                  key={index}
                  status={
                    index % 4 === 0
                      ? "pending"
                      : index % 4 === 1
                        ? "processing"
                        : index % 4 === 2
                          ? "completed"
                          : "cancelled"
                  } />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
          <div className="text-sm text-gray-500">Showing 1-10 of 42 orders</div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-teal-500 text-white hover:bg-teal-600">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              4
            </Button>
            <Button variant="outline" size="sm">
              5
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>)
  );
}

function OrderRow({
  status
}) {
  let statusColor = ""
  let statusText = ""

  switch (status) {
    case "pending":
      statusColor = "text-purple-500 bg-purple-50"
      statusText = "Pending"
      break
    case "processing":
      statusColor = "text-blue-500 bg-blue-50"
      statusText = "Processing"
      break
    case "completed":
      statusColor = "text-green-500 bg-green-50"
      statusText = "Completed"
      break
    case "cancelled":
      statusColor = "text-red-500 bg-red-50"
      statusText = "Cancelled"
      break
  }

  return (
    (<tr className="border-b hover:bg-gray-50">
      <td className="py-4 px-4">
        <span className="text-teal-500">#28VR5K59</span>
      </td>
      <td className="py-4 px-4">August 20, 2024</td>
      <td className="py-4 px-4">$3,650</td>
      <td className="py-4 px-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>{statusText}</span>
      </td>
      <td className="py-4 px-4">
        <button className="p-2 border rounded-md hover:bg-gray-50">
          <Eye size={16} className="text-gray-500" />
        </button>
      </td>
    </tr>)
  );
}
