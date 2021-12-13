import React, { useState } from 'react'

function Posters() {

    const [dummyData, setDummyData] = useState([
        {
            'title': 'Support poor families.',
            'content': 'We Provide meals and Essential Products Kits for a Family and care of their Medical Expenses.',
            'donate': '5000',
            'img': 'cancer1.jpeg'
        },
        {
            'title': 'Donate for education',
            'content': 'We support education for all children and literacy for children Your contribution will ensure that such children get a proper education and pave their way to a brighter future.',
            'donate': '8000',
            'img': 'cancer2.jpeg'
        },
        {
            'title': 'Donate for medical Treatment',
            'content': 'We Provides financial support for medical treatments, who can t afford hospital treatment cost. Your contribution save some one life.',
            'donate': '10,000',
            'img': 'cancer3.jpeg'
        },
        {
            'title': 'Donate for old-age home.',
            'content': 'Poor old aged people undergoing great difficulties lacking & logging in love and affection and always are into mental stress, strain, for this reason, we started "OldAge Home for Poor Elders" with humanity and service to cater to the needs of such unfortunate elders. In Oldage Home, 40 old aged people are living and getting food, shelter, love, proper care, and other basic needs. We sponsor elders boarding & lodging facilities with breakfast, lunch, dinner, Medical care.',
            'donate': '4000',
            'img': 'cancer4.jpeg'
        },

    ])
    return (
        <div>
            <div class="text-center py-10">
                <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-1">Save Life Foundation</h1>
                {/* <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2">Cancer Cases</h1> */}
                <h4
                    text={'We are presently pursuing help for the critical case of 6month old baby boy  SUFIYAN SHAH.'}
                    className='mb-2 text-sm text-gray-500'
                ></h4>
                <div class="flex justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div style={{
                    background: '#8A2387',
                    background: '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)',
                    background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)'
                }} class="bg-yellow-100 rounded-sm px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            dummyData.map((el) => {
                                return (
                                    <div class="p-4 md:w-1/4">
                                        <div class="h-full bg-gray-900 rounded-lg overflow-hidden">
                                            <div className="px-7 py-3 text-center text-sm font-bold text-white">
                                                {el.title}
                                            </div>
                                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={'/static/images/' + el.img} alt="blog" />
                                            <div class="p-6">
                                                <h2 class="bg-green-500 p-2 rounded-sm mx-10 tracking-widest text-sm text-center title-font font-medium text-gray-200 mb-1">{el.donate} INR</h2>
                                                <p class="leading-relaxed h-96 mb-3 text-center py-2 text-gray-300">{el.content}</p>
                                            </div>
                                            <div class="bg-yellow-500">
                                                <button className='text-center text-red-600 font-bold w-full mx-auto bg-yellow-500 p-2 text-sm'>
                                                    <a href="https://pmny.in/LIplFS6Lo0ki" >
                                                        DONATE NOW
                                                    </a></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Posters
