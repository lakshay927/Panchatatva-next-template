import React from "react";

function Location() {
  return (
    <section className="w-full">
      <div>
        <img
          className="absolute"
          width={800}
          alt=""
          src="/apngtreeagolden-lotus-festival-3691972-42@2x.png"
        />
      </div>

      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <img className="max-w-sm" alt="" src="/rectangle-2@2x.png" />
        <div className="flex gap-3">
          <div className="font-medium text-lg text-[#936F01] mt-4">
            <div>Home</div>
            <div>About Us</div>
            <div>Our Healing Center</div>
            <div>Healing Stories</div>
            <div>News & Media</div>
            <div className="flex gap-3">
              <div>Programs</div>
              <img alt="" src="/vector4.svg" />
            </div>
            <div className="flex gap-3">
              <div>Online Programs</div>
              <img alt="" src="/vector5.svg" />
            </div>
          </div>

          <img width={500} alt="" src="/screenshot-20230704-at-1211-1@2x.png" />

          <div className="font-medium text-lg text-[#936F01] mt-8">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Copyright Policy</div>
            <div>Disclaimer</div>
          </div>
        </div>
        <div className="flex gap-5 text-[#936F01]">
          <div className="flex gap-3">
            <img alt="" src="/vector3.svg" />
            <a href="tel://+918178546612" target="_blank">
              +91 8178546612
            </a>
          </div>
          <div className="flex gap-3">
            <img alt="" src="/mail.svg" />
            <a href="mailto:info@panchatattva.in" target="_blank">
              info@panchatattva.in
            </a>
          </div>
          <div className="flex gap-3">
            <img alt="" src="/mao-icon.svg" />
            <div>
              Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh - 201303
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
