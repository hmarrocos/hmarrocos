module.exports = {
    siteUrl: "https://hmarrocos.vercel.app/",
    generateRobotsTxt: true,
    exclude: ["/en*", "/de*", "/disallowed"],
    alternateRefs: [
      {
        href: "https://hmarrocos.vercel.app/en",
        hreflang: "en",
      },
      {
        href: "https://hmarrocos.vercel.app/de",
        hreflang: "de",
      },
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: "/disallowed",
        },
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };
  