import Marquee from "react-fast-marquee";
import { MdKeyboardArrowRight } from "react-icons/md";
import { use } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const top_exporterPromise = fetch('/top_exporter.json').then(res => res.json());
const top_importerPromise = fetch('/top_importer.json').then(res => res.json());

const GlobalTraders = () => {

    const exporters = use(top_exporterPromise);
    const importers = use(top_importerPromise);

    return (
        <div className='my-10 md:max-w-7xl md:mx-auto mx-0'>
            <h1 className='md:text-3xl ml-2 md:ml-0 text-xl font-medium mt-10'>🌍 Global Traders</h1>

            <div className='bg-stone-800 mt-5'>
                <div className='grid grid-cols-21 '>
                    <div className='md:col-span-4 col-span-6'>
                        <h2 className='bg-amber-900 md:p-8 px-0 py-[41px] md:text-3xl text-xl font-bold text-center'>Top <br />Importers</h2>
                        <div className='text-green-700 text-2xl font-semibold flex items-end md:mt-15 mt-14 md:ml-34 ml-3'>Value <MdKeyboardArrowRight /></div>
                        <div className='text-orange-500 md:text-2xl text-2xl font-semibold flex items-end mt-2 border pl-3 border-stone-700 md:ml-30 mr-4 mb-4'>Share <MdKeyboardArrowRight /></div>
                    </div>
                    <div className='md:col-span-17 col-span-15'>
                        <Marquee direction='right'>
                            <div className='grid grid-cols-10'>
                                {
                                    exporters.map(exporter => <div key={exporter.company_name} className="ml-5">
                                        <p className=' text-xl font-semibold my-1'>{exporter.country}</p>
                                        <img src={exporter.company_logo} alt={exporter.company_name} className="w-38 mt-5" />
                                        <div className='text-green-700 text-2xl font-semibold flex items-center mt-15 gap-2'><p>{exporter.exported_value_per_year}</p><FaArrowTrendUp /></div>
                                        <div className='text-orange-500 text-2xl font-semibold flex items-center mt-2 mb-4 gap-2'><FaArrowTrendUp /><p>{exporter.global_market_share}</p></div>
                                    </div>)
                                }
                            </div>
                        </Marquee>

                    </div>
                </div>

                <div className='grid grid-cols-21 mt-10'>
                    <div className='md:col-span-4 col-span-6'>
                        <h2 className='bg-amber-900 md:p-8 px-0 py-[41px] md:text-3xl text-xl font-bold text-center'>Top <br />Importers</h2>
                        <div className='text-green-700 text-2xl font-semibold flex items-end md:mt-15 mt-14 md:ml-34 ml-3'>Value <MdKeyboardArrowRight /></div>
                        <div className='text-orange-500 md:text-2xl text-2xl font-semibold flex items-end mt-2 border pl-3 border-stone-700 md:ml-30 mr-4 mb-4'>Share <MdKeyboardArrowRight /></div>
                    </div>
                    <div className='md:col-span-17 col-span-15'>
                        <Marquee>
                            <div className='grid grid-cols-10'>
                                {
                                    importers.map(exporter => <div key={exporter.company_name} className="ml-5">
                                        <p className=' text-xl font-semibold my-1'>{exporter.country}</p>
                                        <img src={exporter.company_logo} alt={exporter.company_name} className="w-38 mt-5" />
                                        <div className='text-green-700 text-2xl font-semibold flex items-center mt-15 gap-2 text-start'><p>{exporter.imported_value_per_year}</p> <FaArrowTrendUp /></div>
                                        <div className='text-orange-500 text-2xl font-semibold flex items-center mt-2 mb-4 gap-2 text-start'><FaArrowTrendUp /> <p>{exporter.global_market_share}</p></div>
                                    </div>)
                                }
                            </div>
                        </Marquee>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GlobalTraders;