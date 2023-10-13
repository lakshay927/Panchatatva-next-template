import React from "react";

function Appointment() {
  return (
    <section className="w-full">
      <h1 className="flex items-center justify-center text-[#202020] text-4xl font-bold">
        Book Appointment
      </h1>
      <form className="bg-[#936F01] border box-border w-[90%] mx-auto rounded-lg mt-5">
        <div className="w-[500px]"></div>
        <img
          className="absolute"
          width={500}
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-3@2x.png"
        />

        <img
          className="absolute"
          width={500}
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-61@2x.png"
        />

        <img
          className="absolute"
          width={500}
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-51@2x.png"
        />

        <img
          className="absolute"
          width={500}
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-41@2x.png"
        />
        <div className="flex w-full">
          <div className="w-[50%] mx-10 my-8">
            <img width={400} alt="" src="/logo2-1@2x.png" />

            <div className="mt-20 text-white text-xl font-semibold">
              <div className="flex gap-3">
                <img className="" alt="" src="/bxsphonecall.svg" />
                <span className="">+91 8178546612</span>
              </div>
              <div className="flex gap-3 mt-8">
                <img className="" alt="" src="/icsharpemail.svg" />
                <span className="">info@panchatattva.in</span>
              </div>
              <div className="flex gap-3 mt-8">
                <img className="" alt="" src="/carbonlocationfilled.svg" />
                <span className="">
                  Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh - 201303
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mx-10 my-8 items-center justify-center bg-white border-[#936F01] border rounded-lg box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col w-[80%] mx-auto my-4 gap-4">
              <input
                className="border-[#936F01] border rounded-md p-3"
                placeholder="Enter Full Name"
              />
              <input
                className="border-[#936F01] border rounded-md p-3"
                placeholder="Email"
              />
              <input
                className="border-[#936F01] border rounded-md p-3"
                placeholder="Phone Number"
              />
              <div className="flex w-full gap-2">
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="Gender*"
                  />
                </div>
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="Age*"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="City*"
                  />
                </div>
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="Country*"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="Type of Appointment"
                  />
                </div>
                <div className="flex w-full">
                  <select
                    className="border-[#936F01] border rounded-md p-3 w-full"
                    placeholder="Date & Time*"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 border-[#936F01] border rounded-md px-4 p-3">
                <div className="flex gap-3">
                  <label>In Person</label>
                  <input className="" type="radio" placeholder="In Person" />
                </div>
                <div className="flex gap-3">
                  <label>Virtual</label>
                  <input className="" type="radio" placeholder="Virtual" />
                </div>
              </div>
              <textarea
                className="border-[#936F01] border rounded-md p-3"
                placeholder="Describe Health Issue"
              ></textarea>
              <button className="bg-[#936F01] border rounded-lg box-border p-3 w-full text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Appointment;
