import React from "react";

function AboutUs() {
  return (
    <section className="w-full">
      <h1 className=" flex items-center justify-center text-[#202020] text-4xl font-bold">
        About Us
      </h1>
      <div className="w-[80%] flex flex-row-reverse gap-16 mt-6">
        <div className="w-[40%] ">
          <h1 className="text-[#936F01] text-xl font-bold">
            About DoctorAvantika Krishna Killa
          </h1>
          <div className="text-sm text-gray-600 font-normal">
            A qualified Naturopathy and Yoga Physician, who takes an integrative
            medical approach to health. Having 10+ years of experience in
            integrative health, she firmly believes that balance is the key to
            good health and that abiding to the principles of Mother Nature, one
            can reverse chronic diseases we encounter nowadays. She has been
            working extensively in the managing some of the chronic lifestyle
            related conditions like Diabetes, Asthma, Autoimmune diseases,
            Sciatica, PCOS, Infertility, Obesity, Thyroid, Dyslipidemia and
            more. She has had the opportunity to work with some great
            Naturopaths, Doctors and Hospitals like the All India Institute of
            Medical Sciences (AIIMS), New Delhi. She is also a trained
            Acupuncturist and Chiropractor.
          </div>
          <button className="border border-[#936F01] rounded-xl p-4 mt-6">
            <div className="text-[#936F01]">Read More</div>
          </button>
        </div>
        <div className="w-[40%]">
          <div className="border rounded-md border-[rgba(156,136,75,0.9)] bg-[rgba(224,204,144,0.9)] w-full">
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#936F01]">
                P
              </div>
              <div className="font-semibold text-lg text-white">
                Panchatattva || Introduction by Dr Avantika Killa
              </div>
            </div>
            <img
              className="ml-8 my-8"
              width={500}
              alt=""
              src="/np-serious-female-doctor-with-female-patient-in-clinic-5zezm0-free-1@2x.png"
            />
            <img className="absolute" alt="" src="/vector.svg" />
            <div className="bg-white border rounded-md border-[rgba(224,204,144,0.9)]">
              <div className="text-[rgba(156,136,75,0.9)]">Introduction to Panchatattva</div>
              <div className="text-white">Dr Avantika Killa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
