import AboutUs from "./components/AboutUs/page";
import Appointment from "./components/Appointment/page";
import Card from "./components/Card/page";
import ChooseUs from "./components/ChooseUs/page";
import Header from "./components/Header/page";
import HealingCenter from "./components/HealingCenter/page";
import Location from "./components/Location/page";
import OurProgram from "./components/OurProgram/page";
import Review from "./components/Review/page";
import Stories from "./components/Stories/page";

export default function Home() {
  return (
    <div className="bg-white w-full mx-auto">
      <div className="w-full flex flex-col gap-8">
        <Header />

        <div className="w-full">
          <div className="">
            <div className="">
              <img className="w-full" alt="" src="/image-4@2x.png" />
            </div>
            <div className="flex justify-between mx-4">
              <div className="relative">
                <img
                  className=" absolute w-18 h-16 mt-1"
                  alt=""
                  src="/ellipse-810@2x.png"
                />
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt=""
                  src="/chevrondown1.svg"
                />
              </div>
              <div className="relative">
                <img
                  className="absolute w-18 h-16 mt-1"
                  alt=""
                  src="/ellipse-810@2x.png"
                />
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Card />
        </div>
        <div className="mt-20">
          <AboutUs />
        </div>
        <div className="mt-20">
          <ChooseUs />
        </div>
        <div className="mt-20">
          <HealingCenter />
        </div>
        <div className="w-40 mt-20"></div>
        <div className="mt-20">
          <OurProgram />
        </div>
        <div className="mt-20">
          <Stories />
        </div>
        <div className="mt-20">
          <Appointment />
        </div>
        <div className="mt-20">
          <Review />
        </div>
        <div className="mt-20">
          <Location />
        </div>
      </div>
    </div>
  );
}
