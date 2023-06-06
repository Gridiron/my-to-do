module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/*.test.js"],
  modulePathIgnorePatterns: [
    "<rootDir>/src/.*/__mocks__",
    "<rootDir>/__mocks__",
  ],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
    "\\.(scss|sass|less|css)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
