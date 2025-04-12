import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Check, MapPin } from "lucide-react"

export default function AddressListPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">My Addresses</h1>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AddressCard
          type="Home"
          isDefault={true}
          name="Antoni Jonson"
          address="123 Main Street, Apt 4B"
          city="New York"
          state="NY"
          zip="10001"
          country="United States"
          phone="+1 (555) 123-4567"
        />

        <AddressCard
          type="Office"
          isDefault={false}
          name="Antoni Jonson"
          address="456 Business Ave, Suite 200"
          city="New York"
          state="NY"
          zip="10002"
          country="United States"
          phone="+1 (555) 987-6543"
        />

        <AddressCard
          type="Apartment"
          isDefault={false}
          name="Antoni Jonson"
          address="789 Second Street, Building C"
          city="Brooklyn"
          state="NY"
          zip="11201"
          country="United States"
          phone="+1 (555) 789-0123"
        />

        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus size={20} className="text-gray-500" />
          </div>
          <h3 className="font-medium mb-2">Add New Address</h3>
          <p className="text-gray-500 text-sm mb-4">Add a new delivery address for your orders</p>
          <Button variant="outline">Add Address</Button>
        </div>
      </div>

      {/* Empty State (hidden by default) */}
      <div className="hidden bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <MapPin size={32} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-medium mb-2">No addresses found</h3>
        <p className="text-gray-500 mb-6">You haven't added any addresses yet</p>
        <Button>Add Your First Address</Button>
      </div>
    </div>
  )
}

function AddressCard({
  type,
  isDefault,
  name,
  address,
  city,
  state,
  zip,
  country,
  phone,
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <span className="font-medium">{type}</span>
          {isDefault && (
            <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
              <Check size={12} />
              Default
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button className="p-1.5 hover:bg-gray-200 rounded-md">
            <Edit size={16} className="text-gray-500" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md">
            <Trash2 size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="font-medium mb-2">{name}</p>
        <p className="text-gray-600 text-sm mb-1">{address}</p>
        <p className="text-gray-600 text-sm mb-1">
          {city}, {state} {zip}
        </p>
        <p className="text-gray-600 text-sm mb-1">{country}</p>
        <p className="text-gray-600 text-sm">{phone}</p>

        {!isDefault && (
          <Button variant="outline" size="sm" className="mt-4 text-xs">
            Set as Default
          </Button>
        )}
      </div>
    </div>
  )
}
