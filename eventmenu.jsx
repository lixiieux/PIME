import * as React from "react";
import { EventCard } from "./EventCard";
import { NavigationItem } from "./NavigationItem";

const events = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/c7c6b3c8c4108e5ed23f947495c68085827360770d8b269948fe01ad3c646d83?apiKey=f5abc369fc3443278954e8b06ef5b288&",
    title: "Balaia São Paulo -Audio",
    date: "07/12/2024",
    location: "São Paulo, SP"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/2c71351cf7f2abe0f53ac60c44b22f2d8b5216ecee0c205c803117a41a5510bc?apiKey=f5abc369fc3443278954e8b06ef5b288&",
    title: "LINUXtips.local",
    date: "14/12/2024",
    location: "São Paulo, SP"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/3b34b67507cd09fba4aed77b7e2e5af5da8df26339af5e7b98da31c9bec084f9?apiKey=f5abc369fc3443278954e8b06ef5b288&",
    title: "Allianz Parque Experience Tou",
    date: "04/12/2024",
    location: "são pailo"
  }
];

function EventMenu() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full rounded-2xl bg-neutral-900 max-w-[480px]">
      <div className="flex flex-col py-3.5 w-full">
        <div className="flex flex-col items-start pl-6 w-full text-white">
          <div className="flex gap-5 justify-between w-full text-xs font-medium whitespace-nowrap max-w-[342px]">
            <div>09:48</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/76bbd0bcdac7bf0bffbe64ce54924babf59f47971aa8d4a50f51257b6d7bbe15?apiKey=f5abc369fc3443278954e8b06ef5b288&"
              alt=""
              className="object-contain shrink-0 self-start aspect-[5.49] w-[66px]"
            />
          </div>
          
          <form className="flex gap-4 justify-center items-center mt-7 w-full text-sm text-red-600 whitespace-nowrap h-[22px] max-w-[319px]">
            <div className="flex flex-col self-stretch my-auto leading-none w-[230px]">
              <div className="flex gap-5 justify-between items-start pr-2 pl-4 w-full bg-orange-50 rounded-md shadow-sm">
                <div className="flex gap-2.5 items-start self-start py-0.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/bb257b3c9d3248aedb99301b58a46d386c4f2179e862c56e7322cc2906492b94?apiKey=f5abc369fc3443278954e8b06ef5b288&"
                    alt="Search icon"
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <label htmlFor="searchInput" className="sr-only">Buscar</label>
                  <input
                    id="searchInput"
                    type="search"
                    placeholder="Buscar"
                    className="bg-transparent border-none outline-none"
                  />
                </div>
                <button type="submit" aria-label="Submit search">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/8a99e4262a24951fb09d038101f8c5ce60177fbb91f8ab00eb9a3738d8fb834b?apiKey=f5abc369fc3443278954e8b06ef5b288&"
                    alt=""
                    className="object-contain shrink-0 my-auto aspect-[1.36] w-[19px]"
                  />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="flex gap-1 justify-center items-center self-stretch py-0.5 pr-2 pl-2 my-auto leading-none text-center rounded-md bg-stone-50 min-h-[24px] shadow-[1px_1px_16px_rgba(0,0,0,0.08)] w-[73px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/9b50bee6ba6ee8af8c7dad17e5cf903130e222463ea4235946e477803d97f3f6?apiKey=f5abc369fc3443278954e8b06ef5b288&"
                alt="Filter icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span>Filtro</span>
            </button>
          </form>

          <div className="mt-2 text-4xl font-semibold">Menu</div>
          <div className="text-2xl font-semibold">Em destaque</div>
          <div className="flex relative flex-col mt-4 w-full rounded-xl aspect-[1.363] max-w-[342px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/86f1addc5e6bfa390a2baf02d4ce0fdd585d36c0f728332a825dc03c3a773eb3?apiKey=f5abc369fc3443278954e8b06ef5b288&"
              alt="Bruno Mars concert featured image"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col items-start pt-48 pr-16 pb-2 pl-3 rounded-xl">
              <div className="text-2xl font-semibold">Bruno Mars</div>
              <div className="mt-1 text-base font-medium">
                09/10/2024 - São Paulo, SP
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/3fbdd4c0f4490164639d8487788d79b18a270043edc89b04dcd1842c719e36e6?apiKey=f5abc369fc3443278954e8b06ef5b288&"
            alt=""
            className="object-contain self-center mt-4 w-20 aspect-[10]"
          />
          <div className="mt-6 text-2xl font-semibold">Outros eventos</div>
          <div className="flex gap-4 self-stretch mt-2 text-sm font-medium">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
        
        <nav className="flex gap-5 justify-between items-start px-6 py-1.5 mt-3.5 w-full border-t border-solid bg-neutral-900 border-t-gray-800">
          <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/23b76e7c6ba73691976482b2e2de912892caabed0401764c7fe13a60d27511b1?apiKey=f5abc369fc3443278954e8b06ef5b288&" label="Menu" isActive={true} />
          <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/dfa76a064266a1342f67efc682b1ca2067f293e9de1aa8e7d59d2f3712dae173?apiKey=f5abc369fc3443278954e8b06ef5b288&" label="Pesquisar" isActive={false} />
          <div className="flex flex-col self-stretch">
            <div className="flex gap-10 self-start ml-2.5">
              <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/d9180b55513187314c5f4a7993e51577a69fa0433ccd98bc058d8377d2febee8?apiKey=f5abc369fc3443278954e8b06ef5b288&" label="Ingressos" isActive={false} />
              <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/f5abc369fc3443278954e8b06ef5b288/bcfc5bd030e7a0a3752bbe931f858b32d2441334f9045237430046f8ce7e6a19?apiKey=f5abc369fc3443278954e8b06ef5b288&" label="Perfil" isActive={false} />
            </div>
          </div>
        </nav>
        
        <div className="flex shrink-0 self-center mt-5 h-1 bg-white rounded-3xl w-[142px]" />
      </div>
    </div>
  );
}

export default EventMenu;