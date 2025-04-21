import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
    loading: () => <p>Loading...</p>,
})


const TermsConditions = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions - Vigorous IT</title>
                <link rel="canonical" href="https://www.vigorousit.com/terms-conditions" />
                <meta name="description" content="You may want to check Vigorous IT terms and conditions for General Terms of Work, Responsibilities of the Client, and Liabilities information. Check it out now."
                />
                <meta name="robots" content="noindex"/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Terms and Conditions - Vigorous IT" />
                <meta property="og:description" content="You may want to check Vigorous IT terms and conditions for General Terms of Work, Responsibilities of the Client, and Liabilities information. Check it out now." />
                <meta property="og:url" content="https://www.vigorousit.com/terms-conditions" />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
                <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://www.vigorousit.com/terms-conditions" />
                <meta name="twitter:title" content="Terms and Conditions - Vigorous IT" />
                <meta name="twitter:description" content="You may want to check Vigorous IT terms and conditions for General Terms of Work, Responsibilities of the Client, and Liabilities information. Check it out now." />
                <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
            </Head>

            <div className="overflow-hidden">

                <div className="bg-primary">
                    <Header />
                    <div className="py-14 md:py-24">
                        <div className=" flex flex-col-reverse lg:flex-row md:items-center lg:space-x-20 lg:space-y-0 ">
                            <div className="w-4/5 space-y-8 mx-auto  lg:py-40 py-20 text-white ">
                                <p className="lg:block hidden opacity-5  text-[10rem] whitespace-nowrap">Terms & Conditions</p>
                                <h1 className=' lg:text-5xl text-4xl font-bold lg:absolute left-[50%] lg:transform lg:-translate-x-2/4 lg:-translate-y-[350%] text-center '>Terms & Conditions</h1>

                                <p className="mx-auto md:text-md md:text-center text-justify font-nunito">
                                    At Vigorous, we take immense pride in turning your visionary sports app concept into a tangible digital manifestation. Our Zealous team of creative minds, sports fanatics and ingenious developers collaborates seamlessly to revamp just a mere idea into prolific sports software.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" 2xl:w-9/12 xl:w-5/6 w-11/12  lg:py-12 max-w-7xl mx-auto py-10 bg-slate-50 lg:px-16 mt-10 space-y-5 font-nunito">

                    <div className=' space-y-3'>
                        <h2 className=" md:text-4xl text-3xl font-bold text-center pb-5 text-primary" >Work Conditions, Client Responsibilities, and Liability</h2>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Client Content</h3>
                            <p className='text-ternary/90 text-base'>It is entirely the responsibility of the client to provide website content and you have to do it in the initial phase of the project. Text work, images and other forms of content all are the customer’s responsibility.
                            </p>

                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Data Backup</h3>
                            <p className='text-ternary/90 text-base'>Vigorous will not take responsibility for any data loss because we do not claim to provide you any data backup in any scenario. You have to do it for you or ask us to provide data backup in our agreement.</p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Scope of Work</h3>
                            <p className='text-ternary/90 text-base'>Vigorous will not take responsibility for any data entry, web hosting, artwork, and graphics-related work. In the situation of mentioning it in agreement and approval by both the customer and Vigorous, we will take charge of these data.</p>

                            <p className='text-ternary/90 text-base'>Content of every type will remain under Vigorous control. Here, it will not matter whether the content is created by Vigorous or provided by the customer, you have to agree upon this condition.</p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Deadlines</h3>
                            <p className='text-ternary/90 text-base'>Vigorous will remain dedicated to meeting our deadlines but in case of missing one deadline, we will not take its responsibility. It is because of different scenarios like communication delays, deployment, third-party support, and resource unavailability can cause delays and these conditions are beyond control.</p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Review and Revisions</h3>
                            <p className='text-ternary/90 text-base'>You can ask us in any situation to take a review of your project. Even, during the process of execution, we can stop the process to satisfy your curiosity. Further, we also allow you to come back for revision of your project within seven days. In other situations, we will assume you are satisfied with the project.</p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Copyrights</h3>
                            <p className='text-ternary/90 text-base'>Providing copyright-free content including logos, data and files is the complete responsibility of the client and Vigorous is entirely free from this claim. We don’t want to put your business at risk due to our little negligence. Adding this term to the agreement is to guarantee that the customer will be completely responsible for this.</p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Post-Delivery Changes</h3>
                            <p className='text-ternary/90 text-base'>In case of changes happening from the customer side, Vigorous will not accept the responsibility. This can cause customers to pay extra for additional services.</p>
                        </div>
                    </div>

                    <div className=' space-y-3'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary" >Payment Conditions</h2>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/70'>Payment Methods</h3>
                            <p className='text-ternary/90 text-base'>Vigorous accepts payments with multiple payment options. Cash, cheques and bank transfers are the main methods but we have the right to decline any payment method. Further, we can make changes in our service rate and payment methods without showing any prior notice. </p>
                        </div>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Cancellation Fee</h3>
                            <p className='text-ternary/90 text-base'>In case of facing any inconvenience or dissatisfaction, you can cancel the project but you will need to pay the project cancellation fee on behalf of the project’s progress.</p>
                        </div>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Legal Action</h3>
                            <p className='text-ternary/90 text-base'>In case of overdue payment dates or non-payment conditions, Vigrous can take legal action against customers.</p>
                        </div>
                    </div>


                    <div className=' space-y-3'>
                        <h2 className="md:text-2xl text-xl font-bold text-primary" >Conditions Regarding Support and Third-Party Conditions</h2>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Support</h3>
                            <p className='text-ternary/90 text-base'>After launching any project, customers can use our customer support free of cost for a month. Later, you will need to pay for these services on behalf of the agreement. In customer support, bug fixes and email support are only available but advanced services like add-ons, architecture and changes in rules will cause extra charges.</p>
                        </div>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Third-Party Products and Services</h3>
                            <p className='text-ternary/90 text-base'>Responsibility for third-party services, supports, and products are all will be managed by customers. Further copyright issues and payment licensing problems will be handled by the customer end. We will just precure these on customer demand. </p>
                        </div>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Third-Party Upgrades</h3>
                            <p className='text-ternary/90 text-base'>Vigorous does not offer any third-party service or product upgrade.</p>
                        </div>
                    </div>


                    <div className=' space-y-3'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary" >Conditions That Guide Add-on/Enhancement, Rework & Billing</h2>

                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Modification Management</h3>
                            <p className='text-ternary/90 text-base'>Minor changes in the project are acceptable and we happily do it for the customer but once, we feel that the customer is abusing this opportunity, we will add extra bills. We have a  “modification management” process in which we add all bills over than project bills. Here, we will add data about every extra task and you will have to pay for it. </p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Budget and Approvals</h3>
                            <p className='text-ternary/90 text-base'>The project fees are settled before initiating it but in case of any rework or add-on, it will be charged separately. </p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Payment Timeliness</h3>
                            <p className='text-ternary/90 text-base'>All payments must be done within due time and there will be no discount, deduction or debt settlement. In the flip scenario, Vigorous can take legal action against you.</p>
                        </div>
                    </div>

                    <div className=' space-y-3'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary" >Liability Limitations</h2>


                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Exclusion of Warranties</h3>
                            <p className='text-ternary/90 text-base'>We provide reasonable services and use precautions while working on projects. We do not claim to provide the best services with 100% quality and accuracy. </p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className='md:text-md text-base font-semibold text-ternary/80'>Limitation of Liability</h3>
                            <p className='text-ternary/90 text-base'>We, our employees and contractors; In short, all project handlers will not be responsible for any website or content loss. This may occur due to any error or negligence but we are beyond it and we also do not prefer interference from any third party. We make ourselves free from this burden by claiming that Vigrous will not take responsibility for any including health injury or death. </p>
                        </div>
                    </div>

                    <div className=' space-y-3'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary">Delivery and Approvals</h2>

                        <div className='space-y-1 py-2'>
                            <h3 className="md:text-lg text-md font-semibold text-ternary/80" >Project Stages</h3>
                            <p className='text-ternary/90 text-base'>Vigorous work on stages base and they proceed to the next phase only after getting paid for the completed stage. After the competition, the whole project, and all files will saved and shared with the customer after releasing the remaining payment. For example, after completing a website, we will host it on our servers and after getting payment it will delivered to the customer with all its details. </p>
                        </div>
                        <div className='space-y-1 py-2'>
                            <h3 className="md:text-lg text-md font-semibold text-ternary/80" >Ownership Transfer</h3>
                            <p className='text-ternary/90 text-base'>To satisfy customers, we will share working small data like tools and the complete ownership will be transferred after payment compilation. Further, Vigorous has the right to have your data as our creation to attract more customers. In case of customer dissatisfaction, we can talk on this matter to create a win-win situation. </p>
                        </div>
                    </div>


                    <div className='space-y-1 py-2'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary " >Timescale</h2>

                        <h3 className='md:text-md text-base font-semibold text-ternary/80'>Project Timeline</h3>
                        <p className='text-ternary/90 text-base'>We start work after just getting the advance payment that will be agreed upon. Delivering projects on time is always our priority but some uncontrollable scenarios can cause differences in timelines.</p>
                    </div>

                    <div className='space-y-1 py-2'>
                        <h2 className=" md:text-2xl text-xl font-bold  text-primary " >Jurisdiction</h2>

                        <h3 className='md:text-md text-base font-semibold text-ternary/80'>Governing Law</h3>
                        <p className='text-ternary/90 text-base'>All these terms and conditions are governed as per Indian Law. It means Indian courts will be the place to settle any inconvenient situation. Rather than this, by starting a project with us, you will automatically accept our terms and conditions. </p>

                    </div>

                    <div className='space-y-1 py-2'>
                        <h2 className=" md:text-2xl text-xl font-bold text-primary" >Severability</h2>

                        <h3 className='md:text-md text-base font-semibold text-ternary/80'>Severability Clause</h3>

                        <p className='text-ternary/90 text-base'>In case of the presence of any invalid, illegal or unenforceable term, other terms will be applicable. Soon, the affected term will be replaced with a suitable and closely intent-matching term. </p>
                    </div>



                </div>
            </div>

        </>
    );
};

export default TermsConditions;