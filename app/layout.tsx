import type { Viewport } from 'next'
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://webnhanhgiare.com'),
  alternates: {
    canonical: '/',
    languages: {
      'vi': '/vi',
    },
  },
  openGraph: {
    title: '#1 SEO & Digital Marketing Online Thuê ngoài HCM | Ready Agency',
    description: 'Ready Agency doanh nghiệp Marketing thuê ngoài hiệu quả cho chiến lược tiếp thị doanh nghiệp. Báo giá dịch vụ phòng marketing thuê ngoài tại HCM cam kết doanh số. Liên hệ Hotline 0901 800 110',
    type: 'article',
    publishedTime: '2019-10-03T00:00:00.000Z',
    authors: ['Ready Agency'],
    images: [
      {
        url: '/thumb.jpg',
        width: 1200,
        height: 675,
        alt: 'Ready Agency Co.,Ltd',
      },
    ],
    locale: 'vi_VN',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'orange' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} >
        {children}
      </body>
    </html>
  );
}
