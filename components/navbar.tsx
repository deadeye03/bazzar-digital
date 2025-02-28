import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden md:inline font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">Bazzar Digital</span>
          <div className=" md:hidden relative rounded-full overflow-hidden">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} />

          </div>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="#clients" className="transition-colors hover:text-primary">
            Clients
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About 
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          
          <Button variant="ghost" size="sm">
            Contact
          </Button>
         
        </div>
      </div>
    </header>
  )
}

