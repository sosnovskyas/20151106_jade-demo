//var prod = './build/prod';
var dev = './build/dev/';
var src = './src';

module.exports = {
  developer: {
    sequencePre: [
      // need for resolve trouble with empty sequence
      'empty'
    ],
    sequenceClean: [
      'dev-clean'
    ],
    sequenceBuild: [
      'dev-jade'
    ],
    sequenceServer: [
      'dev-browsersync'
    ],
    sequenceWatch: [
      'dev-watch-jade'
    ],
    sequencePost: [
      // need for resolve trouble with empty sequence
      'empty'
    ]
  },
  devClean: {
    dest: dev
  },
  devJade: {
    watch: src + '/**/*.jade',
    src: src + '/**/*.jade',
    dest: dev
  },
  devBrowsersync: {
    dest: dev
  }
};
