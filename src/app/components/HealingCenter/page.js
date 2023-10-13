import React from "react";

function HealingCenter() {
  return (
    <section className="w-full">
      <img
        className="absolute"
        width={500}
        alt=""
        src="/apngtreeagolden-lotus-festival-3691972-8@2x.png"
      />
      <h1 className="flex items-center justify-center text-[#202020] text-4xl font-bold">
        Our Healing Center
      </h1>
      <div className="w-full flex items-center justify-center gap-7 mt-10">
        <div className="w-[380px] flex flex-col gap-3 items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-md bg-[rgba(224,204,144,0.9)] h-[450px]">
          <img className="max-w-xs px-2" alt="" src="/rectangle-3869@2x.png" />
          <div className="text-white text-2xl text-center font-semibold">
            Relieve Ache & pains
          </div>
        </div>
        <div className="w-[380px] flex flex-col gap-3 items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-md bg-[rgba(224,204,144,0.9)] h-[450px]">
          <img
            className="w-[300px] px-2"
            alt=""
            src="/rectangle-38691@2x.png"
          />
          <div className="text-white text-2xl text-center font-semibold">
            Healing & Strengthening
          </div>
        </div>
        <div className="w-[380px] flex flex-col gap-3 items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-md bg-[rgba(224,204,144,0.9)] h-[450px]">
          <img
            className="w-[300px] px-2"
            alt=""
            src="/rectangle-38692@2x.png"
          />
          <div className="text-white text-2xl text-center font-semibold">
            Ayurveda Spa
          </div>
        </div>
      </div>
      <img
        className="absolute"
        alt=""
        width={500}
        src="/apngtreeagolden-lotus-festival-3691972-71@2x.png"
      />
    </section>
  );
}

export default HealingCenter;
