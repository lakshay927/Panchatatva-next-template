import React from "react";
import ProgramData from "../../data/programsData.json";

function OurProgram() {
  const data = ProgramData;
  return (
    <section className="w-full">
      <h1 className="flex items-center justify-center text-[#202020] text-4xl font-bold">
        Our Programs
      </h1>
      <div className="w-[80%] mx-auto flex flex-wrap items-center justify-center gap-6 mt-8">
        {data &&
          data.map((items, key) => {
            return (
              <div key={key} className="relative flex items-center justify-center">
                <img className="w-[233px]" alt="" src="/group-1000001834@2x.png" />
                <img className="absolute" width={50} alt="" src={items.image} />
                <div className="absolute bottom-14 text-[11px] text-white font-medium flex items-center justify-center">
                  {items.title}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default OurProgram;
