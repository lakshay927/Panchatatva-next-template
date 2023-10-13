import React from "react";

function Review() {
  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto border-[#936F01] border box-border bg-white">
        <h1 className="flex items-center mt-4 justify-center text-[#202020] text-4xl font-bold">
          Review & Testimonials
        </h1>
        <div className="w-[80%] mx-auto my-10 flex items-center justify-center">
          <div className=" flex items-center justify-center">
            <div style={{background: " linear-gradient(#936F01, transparent)"}} className="w-[80%] flex box-border rounded-lg">
              <img
                className=" w-[200px] ml-4"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="flex flex-col items-start justify-center mx-4 gap-3">
                <div className="flex gap-3">
                  <img className="" alt="" src="/star-1.svg" />
                  <img className="" alt="" src="/star-2.svg" />
                  <img className="" alt="" src="/star-3.svg" />
                  <img className="" alt="" src="/star-4.svg" />
                  <img className="" alt="" src="/star-5.svg" />
                  <div className="">4.5 rating</div>
                </div>

                <div className="flex text-white">
                  I recently visited the Ayurvedic Clinic and had a wonderful
                  experience. The staff was friendly and welcoming, creating a
                  warm and calming atmosphere.
                  <img className="" alt="" src="/vector9.svg" />
                </div>
                <div>
                  <div className="text-black text-base font-semibold">Elisa Grant</div>
                  <div className="">Legacy Solutions Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;

{
  /* <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <img className="" alt="" src="/star-1.svg" />

                    <img className="" alt="" src="/star-2.svg" />

                    <img className="" alt="" src="/star-3.svg" />

                    <img className="" alt="" src="/star-4.svg" />

                    <img className="" alt="" src="/star-5.svg" />

                    <div className=""></div>
                  </div>
                  <div className="">4.5 rating</div>
                </div>
                <div className="">
                  I recently visited the Ayurvedic Clinic and had a wonderful
                  experience. The staff was friendly and welcoming, creating a
                  warm and calming atmosphere.
                </div>
                <div className="">
                  <div className="">Elisa Grant</div>
                  <div className="">
                    Legacy Solutions Engineer
                  </div>
                </div>
              </div>
              
            </div>
          </div> */
}
