module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      client: [
        'Gruntfile.js'
      ]
    },
    less:{
      compile:{
        files:{
          'build/css/compiled.css': [
            'public/css/*.less',
            '!public/**/components.less',
          ]
        }
      }
    },
    concat:{
      js:{
        files:{
          'build/js/bundle.js':'public/js/*.js'
        }
      }
    },
    uglify:{
      bundle:{
        files:{
          'build/js/bundle.min.js':'build/js/bundle.js',
        }
      }
    },
    sprite:{
      icons:{
        src: 'public/image/*.png',
        dest: 'build/image/icons.png',
        destCss: 'build/css/icons.css'
      }
    },
    clean:{
      js: 'build/js',
      image: 'build/image',
      css: 'build/css'
    },
    timestamp:{
      options:{
        file: 'your/file/path'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.registerTask('default',['jshint']);
  grunt.registerTask('js','Concatenate and minify js files',['concat:js','less:compile', 'uglify:bundle']);
  grunt.registerTask('build',['clean','less','concat','uglify','sprite']);
  grunt.registerTask('timestamp',function() {
    var options = this.options({
      file: '.timestamp'
    });
    var timestamp = +new Date();
    var contents = timestamp.toString();

    grunt.file.write(options.file, contents);
  });
};
