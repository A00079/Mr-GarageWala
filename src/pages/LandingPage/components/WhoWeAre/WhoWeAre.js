import React from 'react'
import { Text } from '../../../../components';
import whowe1 from '../../../../assets/images/food.jpg';
import whowe2 from '../../../../assets/images/food2.jpg';

export default function Whoweare(props) {

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="bg-gray-100 mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <Text
                            text={'Who We Are'}
                            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
                        />
                        <Text
                            text={'By working with parents, teachers, Anganwadi workers, communities, district and state governments, as well as the children themselves, we address the critical needs of children.Our focus is to change behavior and practices at the grass-roots level and to influence public policies at a systemic level to create an eco-system that makes children a national priority.'}
                            className='w-full text-left leading-relaxed text-gray-500 text-sm'
                        />
                    </div>
                    <div class="bg-white p-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="w-full h-96 rounded" alt="hero" src={whowe1} />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font mt-4">
                <div class="bg-gray-100 mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="bg-white p-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="w-full h-96 rounded" alt="hero" src={whowe2} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <Text
                            text={'What We Do'}
                            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
                        />
                        <Text
                            text={'In the furtherance of its contribution towards bringing relief to the poor and down-trodden people in the society, the NGO also approaches appropriate courts and authorities to mete out the right punishment to the wrong-doers. The bureau also makes considerable efforts by working relentlessly with the help and support of Central and State government and the judiciary. The NGO has worked extensively by extending its support to education, scientific and technical development. It has taken giant steps to ensure safe, secure and enjoyable working environment. To provide completely free vocational guidance and training to the not so privileged children of the society. To focus on professional development of an individual so that he can make his family proud and live a life of dignity.'}
                            className='w-full text-left leading-relaxed text-gray-500 text-sm'
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
