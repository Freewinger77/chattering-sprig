"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart,
  Pipette,
  Phone,
  FileText,
  Home,
  Settings,
  HelpCircle,
  Users,
  Calendar,
  Box,
  Bot,
  LineChart,
  CuboidIcon as CubeTransparent,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const sidebarItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Probe", href: "/study", icon: Pipette },
  { name: "Campaigns", href: "/campaigns", icon: Phone },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Trends", href: "/trends", icon: LineChart, disabled: true },
  { name: "Events", href: "/events", icon: Calendar, disabled: true },
  { name: "Integrations", href: "/integrations", icon: Box, disabled: true },
]

const bottomItems = [
  { name: "Help", href: "/help", icon: HelpCircle, disabled: true },
  { name: "Settings", href: "/settings", icon: Settings, disabled: true },
]

interface SidebarProps {
  logoFont: string
}

export function Sidebar({ logoFont }: SidebarProps) {
  const pathname = usePathname()
  const [campaignFinished, setCampaignFinished] = useState(false)

  useEffect(() => {
    const isFinished = localStorage.getItem("campaignFinished")
    setCampaignFinished(isFinished === "true")
  }, [])

  return (
    <div className="w-64 border-r bg-background p-4 space-y-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 mb-4">
        <CubeTransparent className="h-6 w-6" />
        <ThemeToggle />
      </div>

      <nav className="space-y-2 flex-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:text-foreground",
              pathname === item.href ? "bg-accent" : "",
              item.disabled && "opacity-50 cursor-not-allowed hover:text-muted-foreground",
            )}
            onClick={(e) => {
              if (item.disabled) {
                e.preventDefault()
              }
            }}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t pt-4 space-y-2">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:text-foreground",
              item.disabled && "opacity-50 cursor-not-allowed hover:text-muted-foreground",
            )}
            onClick={(e) => {
              if (item.disabled) {
                e.preventDefault()
              }
            }}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

