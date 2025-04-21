
import Link from 'next/link';
import Image from "next/image";
import dynamic from 'next/dynamic';



const Popup = dynamic(() => import('./Popup'), {
    loading: () => <p>Loading...</p>,
})

const CalltoActionTwo = ({ title, desc, img,width, height }) => {
    return (
        <section className="bg-black/90 w-full ">
            <div className="lg:flex items-center justify-center pt-3 px-5 lg:space-y-0 space-y-5">

                <div className="xl:w-1/4 lg:w-2/5 lg:flex hidden justify-center lg:mx-0 mx-auto">
                    <Image src={img} alt={title} width={width} height={height} />
                </div>

                <div className='xl:flex xl:w-3/4 lg:w-3/5 w-full items-center xl:space-y-0 space-y-8 lg:mx-0 mx-auto' >
                    <div className="lg:text-left text-center xl:w-2/3 w-full space-y-5 2xl:px-0 xl:px-5 px-0">
                        <p className="2xl:text-3xl text-2xl font-bold text-white font-inter">{title}</p>
                        <p className="text-md text-white font-nunito">{desc}</p>
                    </div>
                     <div className="lg:w-2/6 sm:w-5/6 w-3/6 xl:justify-center lg:justify-start sm:justify-center flex sm:mx-0 mx-auto whitespace-nowrap lg:pb-0 pb-10 ">
                          <Popup name="Enquire Now" clipShapeBgColor={"secondary"} bgColor={'bg-secondary'} bgColorOne={'bg-gray-300'} iconColor={'text-ternary'} />
                    </div> 
                
                </div>

            </div>
        </section>
    );
};
export default CalltoActionTwo;
