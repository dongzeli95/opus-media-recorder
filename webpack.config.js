var config = {
  "mode": "development",
  "entry": [
    "./src/index.js"
  ],
  "output": {
    "library": "[name]",
    "libraryTarget": "umd",
    "libraryExport": "default",
    "path": `${__dirname}/build`,
    "filename": "[name].js"
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx|mjs)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.(js|mjs)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": ["env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: [`${__dirname}/example`, `${__dirname}/build`],
    compress: true,
    port: 9000,
    https: true
  }
};

var MediaRecorder = Object.assign({}, config, {
  "entry": {
    MediaRecorder: ["./src/MediaRecorder.js"]
  },
  "output": {
    "library": "[name]",
    "libraryTarget": "umd",
    "libraryExport": "default",
    "path": `${__dirname}/build`,
    "filename": "[name].js"
  }
});

var WaveWorker = Object.assign({}, config, {
  "entry": {
    WaveWorker: ["./src/WaveWorker.js"]
  },
  "output": {
    "path": `${__dirname}/build`,
    "filename": "WaveWorker.js"
  }
});

module.exports = [
  MediaRecorder, WaveWorker
];