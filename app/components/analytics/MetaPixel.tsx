// app/components/analytics/MetaPixel.tsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { captureTrackingParams } from "../../lib/utm";

import { trackPageView } from "../../lib/analytics";

interface MetaPixelProps {
  pixelId?: string;
}

const DEFAULT_PIXEL_ID = "1562294125584970";

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  const activePixelId =
    pixelId || process.env.META_PIXEL_ID || DEFAULT_PIXEL_ID;
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    captureTrackingParams();
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  if (!activePixelId) {
    return null;
  }

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${activePixelId}');
          try {
            var urlParams = new URLSearchParams(window.location.search);
            var testCode = urlParams.get('test_event_code') || sessionStorage.getItem('meta_test_event_code');
            if (testCode) {
              sessionStorage.setItem('meta_test_event_code', testCode);
              fbq('track', 'PageView', {}, { test_event_code: testCode });
            } else {
              fbq('track', 'PageView');
            }
          } catch(e) {
            fbq('track', 'PageView');
          }
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${activePixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
