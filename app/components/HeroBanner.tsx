"use client"
import Image from "next/image"
import HeroImage from '@/public/images/model-pm.webp'
import HeroImageCustome1 from '@/public/images/customer.webp'
import HeroImageCustome2 from '@/public/images/search.webp'
import HeroImageCustome3 from '@/public/images/circle-one.webp'
import PartnerImage1 from '@/public/images/aws-logo.svg'
import PartnerImage2 from '@/public/images/nextjs-logo.svg'
import PartnerImage3 from '@/public/images/nestjs-logo.webp'
import { ReactTyped } from "react-typed";
import Link from "next/link"

function HeroBanner() {
  return (
    <section className="dark:bg-black">
        <div className="pt-32 md:py-16 md:pt-32 container m-auto px-6 md:px-12">
            <div aria-hidden="true" className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl dark:opacity-50"></div>
            <div className="relative lg:flex lg:items-center lg:gap-12">
                <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                    <h1 className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl dark:text-white animate-flip-down animate-ease-in-out">
                        Ready Agency <br className="lg:hidden xl:hidden"/>
                        cung cấp giải pháp
                    </h1>
                    <div className="text-amber-500 dark:text-amber-500 mt-8 lg:mt-2 xl:mt-2">
                    <ReactTyped
                        strings={[
                            "Thiết kế website",
                            "Digital Marketing",
                            "Media Production",
                        ]}
                        typeSpeed={40}
                        backSpeed={30}
                        backDelay={1000}
                        className="uppercase font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl"
                        loop
                    />
                    </div>
                    <p className="mt-8 text-gray-600 dark:text-gray-300">
                        Tiếp thị hiệu quả là chìa khóa chinh phục mục tiêu kinh doanh. Với sự thấu hiểu và tận tâm, Ready Agency co.,Ltd tự hào mang đến những giải pháp toàn diện về Thiết kế Website; Digital Marketing & Media Production cho khách hàng!
                    </p>
                    <div>
                    <div className="flex h-12 gap-x-6 mt-12 justify-between md:justify-normal lg:justify-normal">
                        <Link
                            className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
                            href="/about-us"
                        >
                            Về chúng tôi
                        </Link>
                        <Link
                            className="group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50  rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-violet-800 border border-violet-500 border-b-violet-400 border-b-4 hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50  active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base"
                            href="/contact"
                        >
                            <svg fill="rgba(139,92,246,1)" width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.41421">
                                <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
                            </svg>
                            <span className="ml-3">Tư vấn báo giá</span>
                        </Link>
                    </div>
                    </div>
                    <div className="w-full mt-12 flex gap-6 lg:gap-12 justify-between">
                        <Image 
                            src={PartnerImage2}
                            className="h-6 sm:h-8 w-auto lg:h-10 grayscale dark:invert hover:grayscale-0"
                            alt="Logo NextJS"
                        />
                        <Image 
                            src={PartnerImage3}
                            className="h-8 sm:h-10 w-auto lg:h-12 grayscale dark:grayscale-0 hover:grayscale-0"
                            alt="Logo NestJS"
                        />
                        <Image 
                            src={PartnerImage1}
                            className="h-8 sm:h-10 w-auto lg:h-12 grayscale dark:grayscale-0 hover:grayscale-0"
                            alt="Logo AWS"
                        />
                    </div>
                </div>
                <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
                    <div className="relative mt-12 lg:mt-0">
                        <Image 
                            src={HeroImage}
                            priority={true}
                            alt='Hero Banner'
                        />
                        <div className="hidden md:block">
                            <Image 
                                src={HeroImageCustome1}
                                className="absolute right-0 bottom-0 animate-bounce animate-infinite animate-duration-[1500ms] animate-ease-in-out"
                                alt='Hero Banner'
                            />
                            <Image 
                                src={HeroImageCustome2}
                                className="absolute right-0 top-0 xl:right-14 xl:top-24 animate-jump-in animate-once animate-duration-[2500ms] animate-delay-200 animate-ease-in-out"
                                alt='Hero Banner'
                            />
                            <div className="absolute bottom-40 left-10 animate-rotate-y animate-infinite animate-duration-[3000ms] animate-ease-in-out">
                            <Image 
                                src={HeroImageCustome3}
                                alt='Hero Banner'
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner