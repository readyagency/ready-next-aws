import type { Metadata } from 'next'
import type { Viewport } from 'next'
import Script from "next/script";
import { Organization, WithContext } from "schema-dts";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '#1 SEO & Digital Marketing Online Thuê ngoài HCM | Ready Agency',
  description: 'Ready Agency doanh nghiệp Marketing thuê ngoài hiệu quả cho chiến lược tiếp thị doanh nghiệp. Báo giá dịch vụ phòng marketing thuê ngoài tại HCM cam kết doanh số. Liên hệ Hotline 0901 800 110',
  metadataBase: new URL('https://webnhanhgiare.net'),
  alternates: {
    canonical: 'https://webnhanhgiare.net',
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
}

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://webnhanhgiare.net",
        "logo": "https://webnhanhgiare.net/images/logo-pd-m.webp",
        "name": "Ready Agency Co.,Ltd",
        "description": "Ready Agency doanh nghiệp Marketing thuê ngoài hiệu quả cho chiến lược tiếp thị doanh nghiệp. Báo giá dịch vụ phòng marketing thuê ngoài tại HCM cam kết doanh số. Liên hệ Hotline 0901 800 110",
        "email": "contact@ready-agency.com",
        "telephone": "+84-90-180-0110",
        "image": [
          "https://webnhanhgiare.net/photo.jpg",
         ],
        "sameAs": [
        "https://www.facebook.com/readyagency.vn/",
        "https://www.linkedin.com/company/ready-agency-vietnam/",
        "https://www.youtube.com/channel/UCQlQ4tzQfyfQ0ou8gHca96g"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "157 Nguyen Huu Canh Street, Ward 22, Binh Thanh Distric",
          "addressLocality": "Hồ Chí Minh",
          "addressRegion": "Vietnam",
          "postalCode": "700000",
          "addressCountry": "VN"
        },
        "vatID": "0315928578",
        "iso6523Code": "0199:724500PMK2A2M1SQQ228",
    }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <body className={montserrat.className} >
        {children}
        <GoogleTagManager gtmId="GTM-TMDTW58" />
      </body>
    </html>
  );
}
