function CallToAction() {
  return (
    <section className="py-20 bg-[url('../public/images/cta-pm-1.webp')]">
        <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
            <div className="xl:w-5/12">
                <h2 className="text-4xl leading-normal xl:text-5xl xl:leading-tight font-bold text-white">
                Tư Vấn Miễn Phí <br />
                Gia Tăng Lợi Nhuận Từ Online
                </h2>
            </div>
            <div className="xl:w-5/12">
                <div className="max-w-lg">
                <p className="text-xl xl:text-2xl text-white mb-8">
                    Chúng tôi mong muốn khách hàng của mình thành công hơn mỗi ngày!
                </p>
                <a
                    href="contact-us.html"
                    className="bg-blue-500 group inline-flex gap-1 items-center justify-center py-4 px-7 rounded-xl text-white text-lg transition-all hover:bg-blue-600"
                >
                    <span>Tư vấn ngay </span>
                    <svg
                    className="stroke-white transform translate transition-transform group-hover:translate-x-2"
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
                        stroke="slate-950"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction