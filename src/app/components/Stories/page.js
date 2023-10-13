import React from "react";

function Stories() {
  return (
    <section className="w-full bg-[rgba(233,230,221,0.9)]">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[#202020] text-4xl font-bold">Healing Stories</h1>

        {/* <img
          className="absolute"
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-5@2x.png"
        />

        <img
          className="absolute"
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-7@2x.png"
        />

        <img
          className="absolute"
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-4@2x.png"
        />

        <img
          className=""
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-6@2x.png"
        /> */}

        <div className="max-w-4xl h-60 flex items-center border box-border rounded-md justify-center shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white mt-5">
          <h3 className="px-3">
            “I have Diabetes for the last 20 years for which I have been taking
            up to 20 units of insulin everyday along with other regular
            medicines to control my sugar level. One of my relatives informed me
            about Panchatattva and I planned a visit. Within 2 months of
            following the diet plan, the results were so positive that at
            present I no longer need insulin shots and my other medicines have
            also been reduced to half. I'm grateful to the entire team.”
          </h3>
        </div>
        <div>
          <img alt="" src="/group-5.svg" />
        </div>
        <h3 className="text-[#936F01]">Rajesh Goenka (Business)</h3>
      </div>
    </section>
  );
}

export default Stories;
