import Image from "next/image";
import CaverneImage from "./pexels-jeremy-bishop-2397414.jpg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="space-y-4 text-center z-20">
        <h1 className="text-6xl">
          Hey! I&apos;m{" "}
          <span className="font-mono border rounded-full bg-foreground/5 px-2">
            Anthony
          </span>
        </h1>
        <p className="text-xl">
          <span className="font-mono border rounded-full bg:transparent hover:bg-foreground/5 px-2">
            caverne.io
          </span>
          on the internet
        </p>
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-10 bg-background/80"/>
        
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
        <Image
          src={CaverneImage}
          alt="Caverne photography"
          className="object-cover min-w-full min-h-full"
        />
      d</div>
    </div>
  );
}
