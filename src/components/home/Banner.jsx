import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from 'react';
import 'animate.css'
import '../../App.css'

const Banner = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='relative w-full mx-auto my-3 md:my-10'>
            <div className=" animate__animated animate__fadeInRight">
                {/* Custom Left & Right Buttons */}
                <div
                    ref={nextRef}
                    className="btn btn-circle opacity-50 absolute top-1/2 right-4 z-10 -translate-y-1/2"
                >
                    ❯
                </div>

                <div
                    ref={prevRef}
                    className="btn btn-circle opacity-50 absolute top-1/2 left-4 z-10 -translate-y-1/2"
                >
                    ❮
                </div>


                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000, // waits 1s before moving
                        disableOnInteraction: false,
                    }}
                    speed={10000} // 🧡 controls smoothness of slide animation
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {
                        data.map((src) => (
                            <SwiperSlide key={src._id}>
                                <div className="md:h-100 h-50 flex items-center justify-center bg-gray-100  overflow-hidden">
                                    <img
                                        src={src.productImage}
                                        alt={`Slide ${src.serviceId + 1}`}
                                        className="object-cover w-full h-full"
                                    />

                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-5">
                                            <h2 className='text-white text-[1rem] md:text-4xl font-bold'>{src.productName}</h2>
                                            <button className='w-40'>See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;