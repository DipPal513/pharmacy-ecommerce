import Link from "next/link"
import { List, Layers, Wallet, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    (<div>
      {/* Summary Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <SummaryCard
            title="50"
            subtitle="Pending Orders"
            icon={<List size={24} />}
            bgColor="bg-purple-50"
            textColor="text-purple-500"
            iconBgColor="bg-purple-200" />
          <SummaryCard
            title="250"
            subtitle="Completed Orders"
            icon={<Layers size={24} />}
            bgColor="bg-green-50"
            textColor="text-green-500"
            iconBgColor="bg-green-500" />
          <SummaryCard
            title="$15.80k"
            subtitle="My Balance"
            icon={<Wallet size={24} />}
            bgColor="bg-red-50"
            textColor="text-red-500"
            iconBgColor="bg-red-400" />
        </div>
      </div>
      {/* Recent Orders */}
      <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
          <Link
            href="/dashboard/orders"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">
            View All Orders
          </Link>
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
              <OrderRow status="pending" />
              <OrderRow status="processing" />
              <OrderRow status="completed" />
              <OrderRow status="cancelled" />
              <OrderRow status="completed" />
            </tbody>
          </table>
        </div>
      </div>
    </div>)
  );
}

function SummaryCard({
  title,
  subtitle,
  icon,
  bgColor,
  textColor,
  iconBgColor
}) {
  return (
    (<div
      className={`${bgColor} p-4 md:p-6 rounded-md flex justify-between items-center`}>
      <div>
        <h3 className={`text-2xl md:text-3xl font-bold ${textColor}`}>{title}</h3>
        <p className={`${textColor} text-sm md:text-base`}>{subtitle}</p>
      </div>
      <div className={`${iconBgColor} text-white p-3 rounded-full`}>{icon}</div>
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
