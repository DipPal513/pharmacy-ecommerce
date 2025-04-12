import { Bell, CreditCard, Heart, LayoutDashboard, LogOut, MapPin, MessageSquare, Settings, ShoppingBag, TicketCheck, Truck, User } from 'lucide-react';
import Image from "next/image";
function NavItem({ icon, label, badge, active, className = "" }) {
    return (
      <div className={`flex items-center justify-between p-3 rounded-md ${active ? 'bg-teal-500 text-white' : 'hover:bg-gray-100'} ${className}`}>
        <div className="flex items-center gap-3">
          <span className={active ? 'text-white' : 'text-teal-500'}>{icon}</span>
          <span className="font-medium">{label}</span>
        </div>
        {badge && (
          <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    );
  }
  
export default function Sidebar() {
  return (
    <div className="w-80 border-r bg-white p-6">
        {/* User Profile */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="rounded-full border-2 border-teal-500 p-1">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image 
                  src="/placeholder.svg?height=80&width=80" 
                  alt="Antoni Jonson" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-teal-500 rounded-full p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h2 className="font-semibold text-lg mt-3">Antoni Jonson</h2>
          <p className="text-gray-500 text-sm">antoni@example.com</p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<User size={18} />} label="My Profile" />
          <NavItem icon={<ShoppingBag size={18} />} label="My Order List" badge="02" />
          <NavItem icon={<Heart size={18} />} label="My Wishlist" badge="02" />
          <NavItem icon={<MapPin size={18} />} label="Address List" />
          <NavItem icon={<TicketCheck size={18} />} label="Support Tickets" badge="02" />
          <NavItem icon={<Truck size={18} />} label="Track My Order" />
          <NavItem icon={<CreditCard size={18} />} label="Payment Methods" />
          <NavItem icon={<Bell size={18} />} label="Notification" badge="02" />
          <NavItem icon={<MessageSquare size={18} />} label="Messages" badge="02" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<LogOut size={18} />} label="Logout" className="text-red-500" />
        </nav>
      </div>
  )
}
