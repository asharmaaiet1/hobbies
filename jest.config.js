module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    },
    verbose: true,
  moduleNameMapper: {
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{tsx,js,jsx,mjs}'],
  coverageReporters: ['lcov', 'text-summary'],
}