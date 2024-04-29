module.exports = {
  babel: {
    plugins: [
      {
        plugin: require.resolve('@babel/plugin-transform-unicode-regex'),
      },
    ],
  },
};
