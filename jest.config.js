/** @type {import('jest').Config} */
export default {
  verbose: true,
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  testEnvironment: "jest-environment-jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/components/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};