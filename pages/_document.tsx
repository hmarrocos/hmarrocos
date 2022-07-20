import Document, { Html, Main, NextScript } from "next/document";
const isProd = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
          {/* Cloudflare Web Analytics */}
          {isProd && (
            <>
              <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "c947d51fa622494c9a87f2be4d2e3c24", "spa": true}'
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}
