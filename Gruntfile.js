'use strict';

module.exports = function (grunt) {

  // Automatically load required grunt tasks
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'src',
    dist: 'dist'
  };

  // var modRewrite = require('connect-modrewrite');

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= config.app %>/assets/scripts/**/*.js', 'Gruntfile.js'],
        tasks: ['eslint']
      },
      styles: {
        files: ['<%= config.app %>/assets/styles/**/*.less'],
        tasks: ['less', 'postcss']
      }
    },

    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          files: [
            '<%= config.app %>/**/*.html',
            '.tmp/assets/styles/{,*/}*.css',
            '<%= config.app %>/assets/images/**/*',
            '<%= config.app %>/**/*.js'
          ],
          port: 9000,
          server: {
            baseDir: ['.tmp', config.app],
            routes: {
              '/bower_components': './bower_components'
            }
            // middleware: [
            //   modRewrite([
            //     '^.([^\\.]+)$ /$1.html [L]'
            //   ])
            // ]
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: [
        'Gruntfile.js',
        '<%= config.app %>/**/*.js',
        '!<%= config.app %>/assets/scripts/vendor/*'
      ]
    },

    postcss: {
      options: {
        map: true,
        processors: [
          // Add vendor prefixed styles
          require('autoprefixer')({
            browsers: ['> 1%', 'last 4 versions']
          })
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/styles/',
          src: ['app.css'],
          dest: '.tmp/assets/styles/'
        }]
      }
    },

    // Compile LESS to CSS
    less: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/assets/styles/',
          src: ['app.less'],
          dest: '.tmp/assets/styles/',
          ext: '.css'
        }]
      }
    },

    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        src: ['<%= config.app %>/index.html'],
        ignorePath: /^(\.\.\/)*\.\./
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= config.dist %>/assets/scripts/**/*.js',
          '<%= config.dist %>/assets/styles/**/*.css',
          '<%= config.dist %>/assets/images/**/*.*',
          '<%= config.dist %>/assets/fonts/**/*.*',
          '<%= config.dist %>/*.{ico,png}'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/assets/images',
          '<%= config.dist %>/assets/styles'
        ],
        patterns: {
          js: [
            [/(assets\/images\/header-bg\.jpg)/g, 'Replacing reference to header-bg.jpg']
          ]
        }
      },
      html: ['<%= config.dist %>/**/*.html'],
      css: ['<%= config.dist %>/assets/styles/**/*.css'],
      js: ['<%= config.dist %>/assets/scripts/**/*.js']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/assets/images',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/assets/images',
          src: '**/*.svg',
          dest: '<%= config.dist %>/assets/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          // true would impact styles with attribute selectors
          removeRedundantAttributes: false,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'assets/images/**/*.webp',
            '**/*.html',
            '*.md',
            'assets/fonts/**/*.*'
          ]
        }]
      }
      // styles: {
      //   expand: true,
      //   dot: true,
      //   cwd: '<%= config.app %>/styles',
      //   dest: '.tmp/styles/',
      //   src: '**/*.css'
      // }
    },

    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:cssbristol/cssbristol.github.io.git',
          branch: 'master'
        }
      }
    }
  });

  grunt.registerTask('serve', 'start the server and preview your app', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'less',
      'postcss',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('dist', ['build']);

  grunt.registerTask('build', [
    'eslint',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'less',
    'imagemin',
    'svgmin',
    'postcss',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('deploy', ['buildcontrol:pages']);
};
