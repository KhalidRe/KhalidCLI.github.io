module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "green",
    },
    name: "OMKF",
    themeColor: "green",
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
        },
      ],
    },
  },
};
