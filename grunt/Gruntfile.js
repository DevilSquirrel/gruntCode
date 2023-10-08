module.exports = function (grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js'],
    less:{
      compile:{
        files: {
          'build/css/compiled.css': 'public/css/layout.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['jshint']);
};
