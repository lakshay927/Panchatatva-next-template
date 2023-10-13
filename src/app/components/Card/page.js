import React from "react";
import CardData from "../../data/cardsData.json";

function Card() {
  const data = CardData;
  return (
    <section className="w-full flex gap-7 px-20">
      {data &&
        data.map((items, key) => {
          return (
            <div
              key={key}
              className="relative w-[350px] h-auto flex flex-col shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white border box-border rounded-md border-solid border-[rgba(147,111,1,0.34)]"
            >
              <div className="shadow-[0_0_4px_rgba(0,0,0,0.25)] h-28 bg-[rgba(147,111,1,0.9)] rounded-md">
                <div className="flex flex-col gap-2 w-full my-3">
                  <div className="flex items-center justify-center">
                    <img alt="" src={items.image} />
                  </div>
                  <h1 className="font-bold text-lg flex items-center justify-center text-[#202020]">
                    {items.title}
                  </h1>
                </div>
              </div>
              <div className="m-6">
                <p>{items.content}</p>
              </div>
              <div className="absolute bottom-3 text-center cursor-pointer text-[#936F01]">
                Read less
                <img className="text-[#936F01]" alt="" src="/vector-10.svg" />
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Card;
