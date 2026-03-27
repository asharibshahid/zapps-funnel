import ZappsAgencyOfferSystem from "@/components/zapps-agency-offer-system"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <ZappsAgencyOfferSystem />
      
      {/* Link to new solutions pages */}
      <div className="fixed bottom-6 right-6">
        <Link href="/solutions">
          <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
            View Solutions
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </>
  )
}
