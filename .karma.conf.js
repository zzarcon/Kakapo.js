module.exports = function(config) {
  config.set({
    browsers: ['Firefox'],
    frameworks: ['browserify', 'tap'],
    files: [
      'tests/runners/karma.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['browserify']
    }
  });
};
