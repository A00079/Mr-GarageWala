import { Text } from '../../../../components';
import carHead1 from '../../../../assets/images/carhead1.jpg'
import carHead2 from '../../../../assets/images/carhead2.jpg'
import carHead3 from '../../../../assets/images/carhead3.jpg'

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

export default function ShowCases() {
  return (
    <section>
      <header>
        <div class="w-full bg-center bg-cover h-60" style={{ backgroundImage: `url(${carHead1})` }}>
          <div class="flex items-center pl-20 justify-start w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span class="text-blue-400 underline">Saas</span></h1>
              <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
          </div>
        </div>


        <div class="w-full bg-center bg-cover h-60 mt-5" style={{ backgroundImage: `url(${carHead2})` }}>
          <div class="flex items-center pr-20 justify-end w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span class="text-blue-400 underline">Saas</span></h1>
              <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
          </div>
        </div>
        <div class="w-full bg-center bg-cover h-60 mt-5" style={{ backgroundImage: `url(${carHead3})` }}>
          <div class="flex items-center pl-20 justify-start w-full h-full bg-gray-700 bg-opacity-50">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span class="text-blue-400 underline">Saas</span></h1>
              <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
