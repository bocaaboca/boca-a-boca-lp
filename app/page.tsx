import { LandingHero } from "@/components/landing-hero"
import { WaitlistForm } from "@/components/waitlist-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col md:flex-col gap-5 md:h-screen md:overflow-hidden relative">
          <div className="flex flex-col md:flex-row gap-5 md:flex-1 md:min-h-0 relative">
            <div className="flex-1 md:w-[55%] flex items-center justify-center md:h-full pt-[15%] md:pt-0">
              <LandingHero />
            </div>
            
            <hr className="hidden md:block fixed left-[55%] top-[10vh] h-[75vh] w-px bg-gray-800" />
            
            <div className="flex-1 md:w-[45%] flex items-center justify-center md:h-full pt-[25%] md:pt-0">
              <WaitlistForm />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
