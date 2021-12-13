import React, { useEffect, useState } from "react";
import MobileHomeBanner from '../../assets/images/mobile_home_banner.jpeg';
import { Text } from '../../components';
import { LandingBanner, Posters, ClassicModels, ShowCases, CarCollection, PricingModal, WorkWithSaveLife, Cases, BankDetails, BenefitsOfJoining, OurActivity, WhoWeAre, AboutUs, MissionVissionGoal, StoryAboutWeDo, GetToKnowUs, ActivityInFrame, SomeFacts, Volunteers, LatestNews } from '../LandingPage/components';
import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";
import { withRouter } from "react-router";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import HomeBanner2 from '../../assets/images/car1.jpg';
import HomeBanner3 from '../../assets/images/car2.jpg';
import HomeBanner4 from '../../assets/images/car3.jpg';
import brandlogo from '../../assets/images/brand-logo.jpeg';


import { Footer } from "../../layouts/LandingPageLayout/components";
const LandingPage = (props) => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    if (window.innerWidth > 468) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  const paymentHandler = async () => {
    const API_URL = 'http://localhost:5000/'
    const orderUrl = `${API_URL}api/v1/payments/orders`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: "rzp_test_Bycscy22AR3XtX",
      name: "Save Life Foundation",
      description: "Donation",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}api/v1/payments/capture/${paymentId}`;
          const captureResponse = await axios.post(url, {})
          let parsedData = JSON.parse(captureResponse.data)
          if (parsedData.status === 'captured' && parsedData.captured === true) {
            props.history.push({
              pathname: '/check-out-pay-ment/' + props.match.params.id,
              state: parsedData
            });
          }
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        name: "Clerk",
        email: "bendrea007@gmail.com",
        contact: "8169029078"
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <React.Fragment>
      <div className='space-y-5 sm:space-y-0 bg-gray-900'>

        <section>
          <div>
            <div className='relative'>
              <div ref={sliderRef} className="keen-slider z-60">
                <div className="keen-slider__slide number-slide2">
                  <img class=" w-full object-cover object-center h-screen" src={HomeBanner2} alt="blog" />
                </div>
                <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner3} alt="blog" /></div>
                <div className="keen-slider__slide number-slide4 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner4} alt="blog" /></div>
              </div>
            </div>
            <div className="w-full absolute top-0 bg-cover bg-center h-screen">
              <div className="flex items-center justify-start h-full w-full py-24 sm:px-24">
                <div className="text-center sm:text-left">
                  <div className='space-y-1'>
                    {/* <img class="hidden sm:block w-20 sm:w-32 object-fit object-center" src={brandlogo} alt="blog" /> */}
                    <div className='bg-yellow-400 rounded-xs px-2 py-1 sm:w-full w-60 mx-auto sm:mx-0'>
                      <div className='text-black sm:w-full w-60 text-sm font-semibold uppercase md:text-sm'>
                        All Donation to save life foundation are exempted under section 80G of the income tax act 1961
                      </div>
                      {/* <Text
                      text={'Stand With Us'}
                      className='text-black text-sm font-semibold uppercase md:text-sm'
                    /> */}
                    </div>
                    <Text
                      text={'No One Has Ever'}
                      className='text-white text-2xl font-semibold uppercase md:text-5xl'
                    />
                    <Text
                      text={'Become Poor'}
                      className='text-white text-2xl font-semibold uppercase md:text-5xl'
                    />
                    <Text
                      text={'By Giving.'}
                      className='text-white text-2xl font-semibold uppercase md:text-5xl'
                    />
                    <div className='w-44 h-1 bg-yellow-400 mx-auto sm:mx-0'></div>
                  </div>
                  <Text
                    text={'A Change May Help Many Lives.'}
                    className='text-white text-lg sm:text-xl mt-2 font-semibold md:text-sm sm:w-96'
                  />
                  <h1 className="text-white text-xs mt-2 font-semibold md:text-xs sm:w-96" style={{ fontFamily: 'Raleway' }}>The life of a man consists of seeing visions and dreaming dreams, but in active charity and in willing service </h1>
                  <h1 className="text-white text-xs mt-2 font-semibold md:text-xs sm:w-96" style={{ fontFamily: 'Raleway' }}>Hepl us create a better world for our children </h1>
                  <div className="flex justify-center space-x-3 sm:justify-start mt-6">
                    <a href="https://pmny.in/LIplFS6Lo0ki" className="flex flex-col items-center inline-flex text-white font-medium bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg">
                      <div>
                        Get Started
                      </div>
                      {/* <div className='text-xs'>
                        (Indian Tax Benefit Avaliable)
                      </div> */}
                    </a>
                    {/* <a href="https://pmny.in/LIplFS6Lo0ki" className="flex flex-col items-center inline-flex text-white font-medium bg-yellow-400 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg">
                      <div>
                        Support Now
                      </div>
                    </a> */}
                    {/* <a className="ml-4 inline-flex text-white font-medium bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm sm:text-lg">Join Us Now</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>
          <LandingBanner />
        </section>
        {/* <section id='section1'>
          <MissionVissionGoal />
        </section> */}
        {/* <section id='section2' className='py-10'>
          <AboutUs />
        </section> */}
        {/* <section>
          <OurActivity />
        </section> */}
        {/* <section>
            <Cases />
          </section> */}
        <section>
          <ClassicModels />
        </section>
        <section>
          <ShowCases />
        </section>
        <section>
          <CarCollection />
        </section>
        <section>
          <PricingModal />
        </section>
        {/* <section id='section3'>
          <WhoWeAre />
          <Posters />
        </section> */}
        {/* <section id='section7'>
          <Posters />
        </section> */}
        {/* <section>
          <BankDetails />
        </section> */}
        {/* <section id='section4'>
          <StoryAboutWeDo />
        </section> */}
        {/* <section id='section5'>
          <WorkWithSaveLife />
        </section> */}
        {/* <section id='section6'>
          <BenefitsOfJoining />
        </section> */}
        <section id='section7'>
          <Footer />
        </section>
        {/* <section>
          <GetToKnowUs />
        </section>
        <section>
          <ActivityInFrame />
        </section>
        <section>
          <SomeFacts />
        </section>
        <section>
          <Volunteers />
        </section>
        <section>
          <LatestNews />
        </section> */}

      </div>
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
