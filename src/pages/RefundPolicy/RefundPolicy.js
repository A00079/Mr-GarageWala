import React from 'react';
import termscon from '../../assets/images/termsandconditions.svg';
const RefundPolicy = () => {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 style={{ fontFamily: 'Luckiest Guy' }} class="tracking-widest title-font sm:text-4xl text-4xl mb-4 font-medium text-indigo-700">Refund
                            <br class="hidden lg:inline-block" /> policy
                        </h1>
                        <p class="mb-8 leading-relaxed">SAVE LIFE FOUNDATION has instituted a donation refund policy to ensure fair and transparent processing of requests for refund of donations as digital payments are becoming more frequent. SAVE LIFE FOUNDATION expects that all donors will exercise due care and diligence while making donations. SAVE LIFE FOUNDATION also recognizes that a donation may be made erroneously or donors may change their mind. SAVE LIFE FOUNDATION will examine request for refund of donation and endeavour to make the refund. SAVE LIFE FOUNDATION may also seek proper explanation and reason from the user. Also, it will require further verification of the user and need documents of proof as well as for donation.</p>
                        <br />
                        <p className='font-bold text-sm'>
                            SAVE LIFE FOUNDATION is not obliged to make refunds and may, in its discretion, decline any requests for refund of donations, particularly if a tax exemption certificate has been issued.
                        </p>
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

                                    <span className='font-bold text-md'>1</span>.If you would like your donation to be refunded, you must request SAVE LIFE FOUNDATION in writing or by email for a refund at the following address: –
                                    e-mail: info@savelifefoundation.org.in
                                    .<br />
                                    <span className='font-bold text-md'>2</span>. Your refund request must contain the details such as Date of Donation, Amount of Donation, Mode of Donation i.e. Credit Card or Online Payment and should reach SAVE LIFE FOUNDATION office within 7 (Seven) days from the date on which you made the donation i.e.:The date on which you Made the donation online, electronically or through other means, ORThe date on which you Handed over the cheque / demand draft to SAVE LIFE FOUNDATION or someone authorised by SAVE LIFE FOUNDATION for this purpose, OR The date on which you Despatched the cheque / demand draft to SAVE LIFE FOUNDATION by other means.<br />

                                    <span className='font-bold text-md'>3</span>. The refund process may take time  30 working days depending on the availability of the information from third parties such as Payment Gateway, Banks, etc. through which transaction is done.<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default RefundPolicy;