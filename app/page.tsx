import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white" key={Date.now()}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center px-4 py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {"Proximity".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block opacity-0 animate-float-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <br />
          <h6 className="text-2xl md:text-2xl mb-6">Helping you being close to the customer, at scale.</h6>
          <br />
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Surveys don't produce in-depth insights while manual interviews take weeks - our AI interviewer voice agent
            Proximity optimizes for insight without compromising on speed. Sign in below to see how simple and seamless
            our solution is!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/interview/1">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Try Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20">
              Read Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Your user interviews
                <br />
                enriched with AI.
              </h2>
            </div>
            <div className="grid gap-8">
              <div>
                <div className="text-5xl font-bold text-purple-500">5</div>
                <div className="text-gray-400">ACTIVE ACCOUNTS</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-500">100h+</div>
                <div className="text-gray-400">REAL INTERVIEW DATA</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-emerald-500">$0.35</div>
                <div className="text-gray-400">AVERAGE COST PER ENGAGEMENT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Made for
                <br />
                mass adoption.
              </h2>
            </div>
            <div className="grid gap-8">
              <div className="p-6 rounded-lg bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Fast</h3>
                <p className="text-gray-400">
                  A seamless interview experience. Proximity has latency of 400 milliseconds — and as AI gets better, so
                  will the solution.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Scalable</h3>
                <p className="text-gray-400">
                  Get big, quick. Proximity is made to handle thousands of calls at any given time, and provides instant
                  insights for both UX and product teams.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Robust</h3>
                <p className="text-gray-400">
                  The AI model are validated by hundereds of user interview recordings that were conducted independently
                  of each other, ensuring your agents remains consise and hallucination resistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="py-32 relative">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16">Empower your research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "User Interviews",
              "Sentiment Analysis",
              "Feedback Collection",
              "Usability Testing",
              "Customer Insights",
            ].map((category) => (
              <div key={category} className="p-6 rounded-lg bg-white/5 hover:bg-purple-600/10 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <p className="text-gray-400">
                  Enhance your {category.toLowerCase()} with AI-powered voice agents for deeper, more efficient
                  research.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-500/20 to-transparent" />
        </div>
        <div className="container relative">
          <h2 className="text-3xl font-bold mb-8 text-center">Built on trust.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center justify-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIRBUS_Blue%201-UFumBiRp81gcEVbYBBuACzHQgsraA4.png"
                alt="Airbus"
                width={200}
                height={60}
                className="w-full h-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/McKinsey_&_Company-Logo.wine%201-2quScwx9ddlHmw05GnCxKURY3BHsUg.png"
                alt="McKinsey & Company"
                width={200}
                height={60}
                className="w-full h-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ae89abab318ed3a4a642635_logo_horz_white_bg@2x%201-egLMPwPLYHD8KYDhz2yekGRsoCd6eZ.png"
                alt="TapTap Send"
                width={200}
                height={60}
                className="w-full h-12 object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl mb-8">
              It's time to join hundereds of product managers,
              <br />
              UX researchers, and startups using Proximity.
            </p>
            <Link href="/interview/1">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Try Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">Proximity</div>
            </div>
            <div className="md:col-span-3 text-right text-gray-400">© Proximity 2025</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

