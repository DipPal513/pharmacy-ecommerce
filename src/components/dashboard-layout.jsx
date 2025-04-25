"use client";
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  User,
  ShoppingBag,
  Heart,
  MapPin,
  TicketCheck,
  Truck,
  CreditCard,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/dashboard" },
  { icon: <User size={18} />, label: "My Profile", href: "/dashboard/profile" },
  { icon: <ShoppingBag size={18} />, label: "My Order List", href: "/dashboard/orders", badge: "02" },
  { icon: <ShoppingBag size={18} />, label: "Order Details", href: "/dashboard/order-details", badge: "02" },
  { icon: <Heart size={18} />, label: "My Wishlist", href: "/dashboard/wishlist", badge: "02" },
  { icon: <MapPin size={18} />, label: "Address List", href: "/dashboard/address" },
  { icon: <TicketCheck size={18} />, label: "Support Tickets", href: "/dashboard/tickets", badge: "02" },
  { icon: <Truck size={18} />, label: "Track My Order", href: "/dashboard/track" },
  { icon: <CreditCard size={18} />, label: "Payment Methods", href: "/dashboard/payment" },
  { icon: <Bell size={18} />, label: "Notification", href: "/dashboard/notifications", badge: "02" },
  { icon: <MessageSquare size={18} />, label: "Messages", href: "/dashboard/messages", badge: "02" },
  { icon: <Settings size={18} />, label: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({
  children
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebar = document.getElementById("sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")

      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        toggleButton &&
        !toggleButton.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    };
  }, [sidebarOpen])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  return (
    (<div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button
        id="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md md:hidden">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-80 bg-white border-r transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* User Profile */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="rounded-full border-2 border-teal-500 p-1">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Antoni Jonson"
                    fill
                    className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-teal-500 rounded-full p-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h2 className="font-semibold text-lg mt-3">Antoni Jonson</h2>
            <p className="text-gray-500 text-sm">antoni@example.com</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                badge={item.badge}
                active={pathname === item.href} />
            ))}

            <div className="mt-auto pt-4">
              <NavItem
                icon={<LogOut size={18} />}
                label="Logout"
                href="/logout"
                className="text-red-500 mt-4" />
            </div>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 md:ml-0 w-full">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)} />
        )}

        {/* Page Content */}
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>)
  );
}

function NavItem({
  icon,
  label,
  href,
  badge,
  active,
  className = ""
}) {
  return (
    (<Link
      href={href}
      className={cn(
        "flex items-center justify-between p-3 rounded-md",
        active ? "bg-teal-500 text-white" : "hover:bg-gray-100",
        className
      )}>
      <div className="flex items-center gap-3">
        <span className={active ? "text-white" : "text-teal-500"}>{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      {badge && <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">{badge}</span>}
    </Link>)
  );
}
