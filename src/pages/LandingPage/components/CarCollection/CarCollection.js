/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Text } from '../../../../components';

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function CarCollection() {
  return (
    <section>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-4xl font-extrabold text-yellow-500">Our Collections</h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="min-w-screen bg-white py-5 flex items-center justify-center">
          <div class="w-full bg-white  px-5 py-5 md:py-5 text-gray-800 font-light">
            <div class="w-full px-5 mx-auto pb-5">
              <div class="md:flex items-center">
                <div class="md:w-2/3 mb-10 md:mb-0">
                  <Text
                    text={'Why to join us'}
                    className='text-3xl font-semibold text-gray-800 md:text-4xl'
                  />
                  <Text
                    text={'Mr. Garage wala.'}
                    className='text-3xl font-semibold text-yellow-500 md:text-4xl'
                  />
                  <h3 class="text-gray-600 mb-7 font-bold text-sm">Even the smallest contribution can make a big difference to children. To make a real impact on the lives of India's children, we need the generosity of individuals like you!</h3>
                  <div>
                    <span class="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <form>
                    <div class="flex mb-3">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email@example.com" />
                    </div>
                    <div>
                      <button class="block w-full bg-green-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">Subscribe now.</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
