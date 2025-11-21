import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopExportsCategory = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='my-10 md:max-w-7xl md:mx-auto mx-4 overflow-hidden'>
            <h1 className='text-3xl font-medium my-10'>✅ Top export category</h1>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🌾  🍚  🥭 1. Agriculture & Food Products</h2>
                <p className='text-[14px]'>High-quality agricultural exports including rice, spices, fresh fruits, vegetables, tea, seafood, and processed foods. Sourced directly from trusted farmers and suppliers, ensuring international quality standards, freshness, and safety. Ideal for wholesalers, supermarkets, distributors, and global retailers.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10 ml-5 md:ml-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>👕  🧵 2. Textiles & Apparel</h2>
                <p className='text-[14px]'>A wide range of textiles and garments including cotton fabrics, knitwear, denim, ready-made garments, home textiles, and accessories. Produced under strict quality control with competitive pricing, sustainable manufacturing, and on-time delivery.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>👞  👜 3. Leather & Footwear</h2>
                <p className='text-[14px]'>Premium leather goods such as shoes, belts, bags, wallets, and industrial leather products. Export-ready collections crafted with high durability and modern styles to meet global fashion and industrial demands.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10 ml-5 md:ml-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🧺 4. Handicrafts & Home Décor</h2>
                <p className='text-[14px]'>Authentic handcrafted items including bamboo crafts, jute products, pottery, traditional décor pieces, and handmade furnishings. Culturally rich, eco-friendly, and ideal for boutiques, interior designers, and lifestyle stores.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>⚙️  💡 5. Electronics & Machinery</h2>
                <p className='text-[14px]'>Export solutions for electronic devices, machinery parts, electrical fittings, industrial equipment, and hardware tools. Reliable performance, warranty-backed products, and trusted suppliers.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-auto pl-4 my-10 ml-5 md:ml-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>💊  🧪 6. Pharmaceuticals & Chemicals</h2>
                <p className='text-[14px]'>Quality-assured pharmaceutical products, medical supplies, essential chemicals, and cosmetics. Exported with regulatory compliance, proper certification, and secure packaging for global shipment.</p>
            </div>

        </div>
    );
};

export default TopExportsCategory;