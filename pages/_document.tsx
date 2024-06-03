import { Html, Head, Main, NextScript } from "next/document";
import { metaStrings } from "../utils/strings";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={metaStrings.description} />
        <meta property="og:site_name" content={metaStrings.title} />
        <meta property="og:description" content={metaStrings.description} />
        <meta property="og:title" content={metaStrings.title} />
        <meta property="og:image" content={`${metaStrings.url}/static/assets/images/about_meta.png`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={metaStrings.twitterSite} />
        <meta name="twitter:title" content={metaStrings.title} />
        <meta name="twitter:description" content={metaStrings.description} />
        <meta
          name="twitter:image:src"
          content={`${metaStrings.url}/static/assets/images/about_meta.png`}
        />
        <meta
          name="twitter:image"
          content={`${metaStrings.url}/static/assets/images/about_meta.png`}
        />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="349" />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaStrings.title} />
        <meta property="og:site_name" content={metaStrings.title} />
        <meta property="og:description" content={metaStrings.description} />
        <meta
          property="og:image"
          content={`${metaStrings.url}/static/assets/images/about_meta.png`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="349" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={metaStrings.url}></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
