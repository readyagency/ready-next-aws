import Image from 'next/image'
import Logo from '@/public/images/logo-pd-m.webp'
import Tb_BCT from '@/public/images/tb-bocongthuong.webp'
import Tb_DMCA from '@/public/images/tb-dmca.webp'
import Link from 'next/link';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <>
        <footer className="lg:py-120 py-20 border-b border-[#1C2134] bg-[url('../public/images/dev-ft-bg.webp')]">
            <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid md:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-white divide-opacity-10 justify-between gap-10">
                <div className="md:col-span-6 lg:col-span-3">
                <Link href="/" className="block mb-7">
                    <Image
                        src={Logo}
                        alt='Logo Ready Agency'
                    />
                </Link>
                <p className="text-white text-base">
                    Giấy chứng nhận ĐKKD số 0315928578 do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 01/10/2019.
                </p>
                <div className="flex space-x-3 mt-7">
                    <a
                    href="https://fb.com/readyagency.vn"
                    className="text-interface-200 hover:bg-pblue-500 hover:text-white transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                    target="_blank"
                    aria-label="Facebook Icon to Fanpage"
                    rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                    href="https://www.linkedin.com/company/ready-agency-vietnam/"
                    className="text-interface-200 hover:bg-pblue-500 hover:text-white transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                    target="_blank"
                    aria-label="Linkedin Icon to Linkedin Company"
                    rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                    href="https://www.youtube.com/channel/UCQlQ4tzQfyfQ0ou8gHca96g"
                    className="text-interface-200 hover:bg-pblue-500 hover:text-white transition-all text-lg w-10 h-10 rounded-full bg-white bg-opacity-10 inline-flex justify-center items-center"
                    target="_blank"
                    aria-label="YouTube Icon to YouTube Channel"
                    rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-youtube" />
                    </a>
                </div>
                </div>
                <div className="md:col-span-3 lg:col-span-2 pt-8 lg:pt-0 lg:pl-12">
                <h3 className="mb-7 text-white text-2xl font-semibold">Liên kết</h3>
                <nav>
                    <ul className="space-y-4">
                    <li>
                        <Link
                        href="/"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/services"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Dịch vụ
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/about"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Về chúng tôi
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/contact"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Liên hệ
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
                <div className="md:col-span-3 lg:col-span-3 pt-8 lg:pt-0 lg:pl-12">
                <h3 className="mb-7 text-white text-2xl font-semibold">Dịch vụ</h3>
                <nav>
                    <ul className="space-y-4">
                    <li>
                        <Link
                        href="/services/website"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Web Design
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/services/marketing"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Digital Marketing
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/services/production"
                        className="font-medium text-base text-white transition hover:text-pblue-500"
                        >
                        Media Production
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
                <div className="md:col-span-6 lg:col-span-4 pt-8 lg:pt-0 lg:pl-12">
                <h3 className="mb-7 text-white text-2xl font-semibold">
                    Thông tin liên hệ
                </h3>
                <ul className="space-y-3">
                    <li className="flex space-x-2">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 18.3334C12.8125 18.3334 17.5 13.1651 17.5 9.07409C17.5 4.9831 14.1421 1.66669 10 1.66669C5.85786 1.66669 2.5 4.9831 2.5 9.07409C2.5 13.1651 7.1875 18.3334 10 18.3334ZM10 11.6667C11.3807 11.6667 12.5 10.5474 12.5 9.16669C12.5 7.78598 11.3807 6.66669 10 6.66669C8.61929 6.66669 7.5 7.78598 7.5 9.16669C7.5 10.5474 8.61929 11.6667 10 11.6667Z"
                        fill="#2662FA"
                        />
                    </svg>
                    <p className="text-white">
                        <Link
                        href="https://goo.gl/maps/n2v3jLbVed7nAWCS7" >
                            157 Nguyễn Hữu Cảnh, P.22<br />
                            Q.Bình Thạnh, Tp.HCM
                        </Link>
                    </p>
                    </li>
                    <li className="flex space-x-2">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd" d="M7 4C4.23858 4 2 6.23858 2 9V15C2 17.7614 4.23858 20 7 20H17C19.7614 20 22 17.7614 22 15V9C22 6.23858 19.7614 4 17 4H7ZM7.62473 8.21913C7.19347 7.87412 6.56418 7.94404 6.21917 8.3753C5.87416 8.80657 5.94408 9.43586 6.37534 9.78087L8.87656 11.7818C10.7027 13.2427 13.2974 13.2427 15.1235 11.7818L17.6247 9.78087C18.056 9.43586 18.1259 8.80657 17.7809 8.3753C17.4359 7.94404 16.8066 7.87412 16.3753 8.21913L13.8741 10.2201C12.7785 11.0966 11.2216 11.0966 10.126 10.2201L7.62473 8.21913Z"
                        fill="#2662FA"/>
                    </svg>
                    <a href="mailto:contact@ready-agency.com" className="text-white text-base">
                        contact@ready-agency.com
                    </a>
                    </li>
                    <li className="flex space-x-2">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333Z"
                        fill="#2662FA"
                        />
                    </svg>
                    <a href="tel:+84901800110" className="text-white text-base">
                        (+84) 90 1800 110
                    </a>
                    </li>
                </ul>
                <div className='grid grid-cols-2'>
                    <Link href="http://online.gov.vn/Home/WebDetails/59962" legacyBehavior>
                        <a target="_blank" rel="noreferrer" className="mt-7 inline-flex justify-center items-center">
                            <Image 
                                src={Tb_BCT}
                                width={150}
                                height={56}
                                alt='Logo Đã thông báo Bộ Công Thương'
                            />
                        </a>
                    </Link>
                    <Link href="https://www.dmca.com/r/yjmxgzj" legacyBehavior>
                        <a target="_blank" rel="noreferrer" className="mt-7 inline-flex justify-center items-center">
                            <Image
                                src={Tb_DMCA}
                                width={150}
                                height={34}
                                alt="DMCA.com Protection Status"
                            />
                        </a>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <section className="px-4 bg-slate-950 py-5">
            <p className="text-base lg:text-lg text-white text-center">
            Copyright © {year} &#45; All Rights Reserved. Made by 
            <Link href="https://ready-agency.com"> Ready Agency Co.,Ltd</Link>
            </p>
        </section>
    </>

  )
}

export default Footer