module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,mjs}"
    ],
    "testMatch": [
        "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}",
        "<rootDir>/__tests__/?(*.)(spec|test).{js,jsx,mjs}"
    ],
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "transform": {
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    "moduleNameMapper": {
        "^react-native$": "react-native-web"
    },
    "moduleFileExtensions": [
        "web.js",
        "mjs",
        "js",
        "json",
        "web.jsx",
        "jsx",
        "node"
    ]
}