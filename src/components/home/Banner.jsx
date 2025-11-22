import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { use, useRef } from 'react';
import 'animate.css'
import '../../App.css'
import { Link } from 'react-router';
import AuthContext from '../../context/AuthContext';

const Banner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const {allProducts: products} = use(AuthContext);
    
    return (
        <div className=' w-full mx-auto my-3 md:my-10'> 
        {/* relative */}
            <div className="animate__animated animate__fadeInRight">
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
                        products.map((src) => (
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
                                            <Link to={`/products/productsDetails/${src._id}`} className='w-40'><button>See Details</button></Link>
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