import React from 'react';
import termscon from '../../assets/images/termsandconditions.svg';
const TearmsAndConditions = () => {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest title-font sm:text-4xl text-4xl mb-4 font-medium text-indigo-700">Terms
                            <br class="hidden lg:inline-block" /> And Conditions
                        </h1>
                        <p class="mb-8 leading-relaxed">Use of the website is provided by SAVE LIFE FOUNDATION subject to the following Terms and Conditions:</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={termscon} />
                    </div>
                </div>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-4 mx-auto">
                        <div class="-my-8 divide-y-2 divide-gray-100 mb-20">
                            <div class="py-5 flex flex-wrap md:flex-nowrap">
                                <div class="md:flex-grow">
                                    {/* <h2 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest text-2xl font-medium text-gray-400 title-font mb-2">Information We Collect</h2> */}
                                    {/* <p class="leading-relaxed text-xs font-bold text-gray-500">When you create an account and use our Service, we collect the following types of information from you:<br /> */}

                                    <span className='font-bold text-md'>1</span>.By using this website you are accepting the terms and conditions. They are effective from your first visit.<br />
                                    <span className='font-bold text-md'>2</span>. SAVE LIFE FOUNDATION may change these terms and conditions from time to time; your use of the website indicates your acceptance of the terms and conditions at the time of use.<br />
                                    <span className='font-bold text-md'>3</span>. SAVE LIFE FOUNDATION reserves the right to change the content of the website at any time.<br />
                                    <span className='font-bold text-md'>4</span>. SAVE LIFE FOUNDATION has taken every precaution to make sure the content of this website is accurate and legally correct at the time of appearance. If you believe the content of any of our pages is inaccurate please contact us, email at Info@savelifefoundation.org.in<br />
                                    <span className='font-bold text-md'>5</span>.SAVE LIFE FOUNDATION accepts no liability for loss or damage, including personal injury, resulting from use of this website. SAVE LIFE FOUNDATION makes all reasonable efforts to make sure malware or viruses are not transmitted from this website, however this cannot be guaranteed. We recommend that you safeguard your IT equipment before downloading information and files. SAVE LIFE FOUNDATION will not accept liability for damage caused by viruses.<br/>
                                    <span className='font-bold text-md'>6</span>.When we provide links to other websites it does not mean that we approve of or endorse the views and information contained in the website. We accept no liability for damage caused by malware or viruses on websites that we have linked to.<br />
                                    <span className='font-bold text-md'>7</span>.Please request permission before using our logos or other branded material. We reserve the right to require our logo to be removed from websites or printed material if it is not in our interests.<br />
                                    <span className='font-bold text-md'>8</span>. Our downloadable documents, brochures and web pages are provided for your use. You may copy or print the information for private purpose including teaching. You may not amend the content or use it for commercial purposes without SAVE LIFE FOUNDATION’ written consent.<br />
                                    <span className='font-bold text-md'>9</span>.Images and photos used on this website are the property of SAVE LIFE FOUNDATION or other Copyright owners. The may not be reproduced or used without SAVE LIFE FOUNDATION’ or the copyright owner’s written consent.<br />
                                    <span className='font-bold text-md'>10</span>.If there is any conflict between these terms and conditions and rules or specific terms of use relating to specific material then the latter shall prevail.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default TearmsAndConditions;