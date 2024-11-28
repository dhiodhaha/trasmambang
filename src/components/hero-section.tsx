import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url('/hero-image.webp?height=600&width=1200')`,
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            HOMESTAY YANG NYAMAN SEPERTI RUMAH SENDIRI
          </h2>
          <p className="mt-6 text-lg text-white sm:text-xl">
            Homestay kami dirancang khusus untuk memberikan pengalaman menginap
            yang nyaman, lengkap dengan fasilitas modern dan suasana yang
            hangat. Dengan kolam renang, gym corner, dan dapur yang lengkap,
            Anda akan merasa seperti di rumah sendiri.
          </p>

          {/* Materials Button */}
          <Button
            variant="outline"
            className="mt-8 border-2 text-black hover:bg-white hover:text-black transition-all duration-300"
          >
            SELENGKAPNYA
          </Button>

          {/* Social Media Links */}
          <div className="mt-8 flex space-x-4">
            <Link
              href="#"
              className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
