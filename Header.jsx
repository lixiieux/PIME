import * as React from "react";

export function Header() {
  return (
    <div className="flex relative gap-5 justify-between self-center w-full text-base font-medium leading-none text-center max-w-[338px]">
      <div>9:41</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/76a49ddce0610896b78d84cb2e8d31cbb59acf26d882d513b1345d1ba4799c3c?apiKey=f5abc369fc3443278954e8b06ef5b288&"
        className="object-contain shrink-0 my-auto rounded-none aspect-[5.59] w-[67px]"
        alt=""
      />
    </div>
  );
}