import React from "react";
import ChooseData from "../../data/chooseUsData.json";

function ChooseUs() {
  const data = ChooseData;
  return (
    <section className="w-full">
      <h1 className="flex items-center justify-center text-[#202020] text-4xl font-bold">
        Why Choose Us
      </h1>
      <div className="flex gap-5 w-full min-h-[450px] bg-[#936F01] mt-4 py-10">
        {data &&
          data.map((items, key) => {
            return (
              <div key={key} className="w-[350px] h-96 flex items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-[#936F01] border box-border  rounded-md border-solid border-[rgba(147,111,1,0.34)] ">
                <div className="w-80 h-80 border rounded-full bg-white">
                  <div className="flex flex-col items-center justify-center mt-4">
                    <img
                      className="w-20 h-20"
                      alt=""
                      src={items.image}
                    />
                    <p className="text-[#936F01] pt-3 font-medium">
                      {items.title}
                    </p>
                    <p className="w-64 text-center text-sm">
                     {items.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default ChooseUs;
