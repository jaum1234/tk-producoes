const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            "yt3.ggpht.com"
        ]
    },
    i18n: {
        locales: ["en-US", "pt-BR"],
        defaultLocale: "pt-BR"
    }
}

module.exports = nextConfig;