import Image from "next/image";
import type { Metadata } from "next";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import screenshot from "./caverne_io_screenshot.png";
import { LinkedInIcon } from "@/components/icons/ui/linkedin";
import { XIcon } from "@/components/icons/ui/x";
import { GithubIcon } from "@/components/icons/ui/github";
import { Button } from "@/components/ui/button";

import CaverneImage from "./pexels-jeremy-bishop-2397414.jpg";

export const metadata: Metadata = {
  title: "Anthony Cueva (caverne.io)",
  description: "Anthony Cueva is a software engineer based in Peru",
  openGraph: {
    title: "Anthony Cueva (caverne.io)",
    description: "Anthony Cueva is a software engineer based in Peru",
    images: [
      {
        url: "https://www.caverne.io/caverne_io_screenshot.png",
        width: 1200,
        height: 630,
        alt: "caverne.io",
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anthony Cueva",
    url: "https://caverne.io",
    sameAs: [
      "https://www.linkedin.com/in/caverneio",
      "https://www.x.com/caverneio",
      "https://www.github.com/caverneio",
    ],
    email: "hi@caverne.io",
    jobTitle: "Software Engineer",
  };

  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-screen h-[100dvh] flex flex-col items-center justify-center overflow-hidden relative">
        <main className="text-center z-20">
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-8">
            Hey! I&apos;m{" "}
            <span className="font-mono border rounded-full bg-foreground/5 px-2">
              ANTHONY
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-12">
            <span className="font-mono border rounded-full bg:transparent hover:bg-foreground/5 px-2">
              caverne.io
            </span>{" "}
            on the internet
          </p>

          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hi@caverne.io" target="_blank" rel="noreferrer">
                <EnvelopeClosedIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/caverneio/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.x.com/caverneio"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.github.com/caverneio"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </main>

        <a
          className="absolute bottom-0 right-0 py-1 px-2 text-xs bg-muted text-muted-foreground z-20 rounded-tl"
          href="https://www.pexels.com/photo/person-standing-and-holding-lamp-inside-cave-2397414/"
        >
          Photo by Jeremy Bishop
        </a>

        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-10 bg-background/80" />

        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
          <Image
            src={CaverneImage}
            alt="Caverne photography"
            className="object-cover min-w-full min-h-full"
          />
        </div>
      </div>
    </section>
  );
}
