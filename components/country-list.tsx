import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Flag } from "lucide-react"

const countryData = [
  { country: "United States", flag: "🇺🇸", page: "/home", flow: "Onboarding", users: 10000, revenue: "$500,000" },
  { country: "United Kingdom", flag: "🇬🇧", page: "/products", flow: "Checkout", users: 5000, revenue: "$250,000" },
  { country: "Canada", flag: "🇨🇦", page: "/account", flow: "Settings", users: 3000, revenue: "$150,000" },
  { country: "Australia", flag: "🇦🇺", page: "/support", flow: "Ticket Creation", users: 2000, revenue: "$100,000" },
  { country: "Germany", flag: "🇩🇪", page: "/blog", flow: "Content Engagement", users: 4000, revenue: "$200,000" },
]

interface CountryListProps {
  country?: string
}

export function CountryList({ country }: CountryListProps) {
  const filteredData = country ? countryData.filter((item) => item.country === country) : countryData

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Country</TableHead>
          <TableHead>Page</TableHead>
          <TableHead>Flow</TableHead>
          <TableHead>Users Affected</TableHead>
          <TableHead>Potential Revenue</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((item) => (
          <TableRow key={item.country}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <span role="img" aria-label={`Flag of ${item.country}`}>
                  {item.flag}
                </span>
                {item.country}
              </div>
            </TableCell>
            <TableCell>{item.page}</TableCell>
            <TableCell>{item.flow}</TableCell>
            <TableCell>{item.users.toLocaleString()}</TableCell>
            <TableCell>{item.revenue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

