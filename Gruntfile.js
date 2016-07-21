'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      app: {
        options: {
          browserifyOptions: {
            debug: '<%= debug %>'
          }
        },
        files: {
          'tmp/assets/app.js': [ 'app/*.js','app/js/**/*.js' ]
        }
      }
    },

    ngAnnotate: {
      app: {
        files: {
          'tmp/assets/app.js': ['tmp/assets/app.js']
        }
      }
    },

    clean: {
      tmp: ['tmp'],
      dist: ['dist'],
      mainTemp: ['app/main-temp.js']
    },

    copy: {
      dev: {
        files: [
          {src: ['app/index-async.html'], dest: 'tmp/index.html'},
          {expand: true, cwd: 'app/lib/bootstrap/dist/fonts', src: ['**'], dest: 'tmp/fonts'},
          {expand: true, cwd: 'app/bower_components/Ionicons/fonts', src: ['**'], dest: 'tmp/fonts'}
        ]
      },

      prod: {
        files: [
          {src: ['app/index-async.html'], dest: 'dist/index.html'},
          {expand: true, cwd: 'app/lib/bootstrap/dist/fonts', src: ['**'], dest: 'dist/fonts'},
          {expand: true, cwd: 'app/bower_components/Ionicons/fonts', src: ['**'], dest: 'dist/fonts'}
        ]
      }
    },

    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [

          'app/bower_components/angular/angular.js',
          'app/bower_components/jquery/dist/jquery.js',
          'app/lib/bootstrap/dist/js/bootstrap.js',

          'app/bower_components/angular-route/angular-route.js',
          'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
          'app/bower_components/restangular/dist/restangular.js',
          'app/bower_components/underscore/underscore.js'
        ],
        dest: 'tmp/assets/vendor.js'
      },
      css: {
        src: [
          'app/lib/bootstrap/dist/css/bootstrap.css',
          'app/bower_components/angular-ui-notification/dist/angular-ui-notification.css',
          'app/bower_components/Ionicons/css/ionicons.css'
        ],
        dest: 'tmp/assets/vendor.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dev: {
        files: {
          'tmp/assets/app.css': ['app/style/*.css']
        }
      },
      prod: {
        files: {
          'dist/assets/vendor.css': ['tmp/assets/vendor.css'],
          'dist/assets/app.css': ['app/style/*.css']
        }
      }
    },

    ejs: {
      indexHtml: {
        options: {
          version: '<%= version %>'
        },
        src: ['app/index.ejs'],
        dest: 'tmp/index.html'
      }
    },

    html2js: {
      options: {
        base: 'app'
      },
      main: {
        src: ['app/js/**/*.html'],
        dest: 'tmp/assets/templates.js'
      }
    },

    less: {
      dist: {
        files: {
          'tmp/assets/app.css': 'app/styles/app.less'
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'dist/assets/vendor.js': ['tmp/assets/vendor.js'],
          'dist/assets/templates.js': ['tmp/assets/templates.js'],
          'dist/assets/app.js': ['tmp/assets/app.js']
        }
      }
    },

    watch: {
      options: {
        spawn: true,
        livereload: true
      },
      src: {
        files: [ 'app/**/*.js', 'app/**/*.html', 'app/**/*.css'],
        tasks: ['build:dev']
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          port: 4300,
          base: 'tmp'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.task.registerTask('build', 'Build assets for app.', function(env) {
    if (env === 'dev') {
      grunt.config.set('version', '');
      grunt.config.set('debug', true);
      grunt.task.run(`copy:${env}`,'html2js','browserify','concat',`cssmin:${env}`);
    } else if (env === 'prod') {
      grunt.config.set('debug', false);
      grunt.task.run(`copy:${env}`,'html2js','browserify','concat', 'uglify',`cssmin:${env}`);
    } else {
      throw Error(`Unkown params env = ${env} for build assets task.`);
    }
  });

  grunt.registerTask('server',['build:dev', 'connect:server', 'watch']);
  grunt.registerTask('production', ['build:prod']);
};
