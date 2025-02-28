import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-12 text-center md:py-28">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl ">
          Your Growth Partner in a Digital World
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-cyan-500 bg-clip-text font-serif">Bazaar</span>
          <span className="bg-gradient-to-r from-cyan-500 via-pink-300 to-pink-500 bg-clip-text ml-2 font-serif">Digital</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering businesses with cutting-edge software solutions. From AI-driven analytics to seamless Digital Marketing, we &apos;re shaping the future of Business.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="hidden md:block">
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}

