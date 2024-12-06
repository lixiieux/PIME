import * as React from "react";
import { Header } from "./Header";
import { StartButton } from "./StartButton";

export function OnboardingScreen() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full text-white whitespace-nowrap bg-slate-800 max-w-[480px]">
      <div className="flex relative flex-col pt-3.5 w-full aspect-[0.462]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/862abb283942ef7da4512a2ad4e60935398faed6d31880fa2b616322d290d2e0?apiKey=f5abc369fc3443278954e8b06ef5b288&"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <Header />
        <div className="flex relative flex-col px-14 pt-14 pb-9 mt-96 w-full text-2xl font-semibold">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/5391918528ea33209fbf441543d3cc13ed3a253506c71582a8382779313cf892?apiKey=f5abc369fc3443278954e8b06ef5b288&"
            className="object-contain w-full aspect-[1.43]"
            alt="Logo"
          />
          <StartButton />
        </div>
      </div>
    </div>
  );
}