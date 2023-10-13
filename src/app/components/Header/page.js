import React from "react";

function Header() {
  return (
    <header className="w-full h-48 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="w-full flex flex-col-reverse">
        <div>
          <img alt="" src="/rectangle-3867@2x.png" />
        </div>
        <div className="w-full flex justify-center mt-5 text-[#454545]">
          <nav className="flex gap-3">
            <div>
              <div>Home</div>
              <img alt="" src="/vector-16.svg" />
            </div>
            <div>
              <div>About Us</div>
              <img alt="" src="/icon4.svg" />
            </div>
            <div>
              <a>Our Healing Center</a>
              <img alt="" src="/icon4.svg" />
            </div>
            <div>
              <div>Healing Stories</div>
              <img alt="" src="/icon4.svg" />
            </div>
          </nav>
          <img className="max-w-xs" alt="" src="/rectangle-21@2x.png" />
          <nav className="flex gap-3">
            <div>
              <div className="flex gap-2">
                Programs
                <img alt="" src="/vector10.svg" />
              </div>
            </div>
            <div>
              <div>News & Media</div>
              <img alt="" src="/icon4.svg" />
            </div>
            <div>
              <div className="flex gap-2">
                Online Programs <img alt="" src="/vector11.svg" />
              </div>
            </div>
            <div>
              <button className="bg-[#936F01] text-white text-sm rounded-lg p-1">
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
