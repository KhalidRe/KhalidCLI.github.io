module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "Black",
    },
    name: "Great Abyss",
    themeColor: "Black",
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: "https://avancera.app/cities/",
        },
      ],
    },
  },
};
