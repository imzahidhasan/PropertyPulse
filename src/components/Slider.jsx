import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade,Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, EffectFade, Autoplay, Navigation]}
                className="mySwiper md:h-screen"
            >
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center">
                        <img className='w-full' src="https://i.ibb.co/1MR8PXN/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg" alt="" loading='lazy' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-40 absolute inset-0"></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center">
                        <img className='w-full' src="https://i.ibb.co/84dvQdp/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg" alt="" loading='lazy' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center">
                        <img className='w-full' src="https://i.ibb.co/3s8ztWT/aaron-huber-s95o-B2n9jng-unsplash.jpg" alt="" loading='lazy' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center">
                        <img className='w-full' src="https://i.ibb.co/0Kg2G2x/daniil-silantev-n-Bui-Lbz-j4-A-unsplash.jpg" alt="" loading='lazy' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider