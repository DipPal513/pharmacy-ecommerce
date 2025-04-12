export default function Loading() {
    return (
      <div className="container mx-auto py-6 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
  
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-20 bg-gray-200 rounded w-full"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
  
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  