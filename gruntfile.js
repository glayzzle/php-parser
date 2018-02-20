module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    browserify: {
      options: {
        banner:
          "/*! <%= pkg.name %> - BSD3 License - <%= grunt.template.today('yyyy-mm-dd') %> */\n",
        alias: {
          "php-parser": "./src/index.js"
        },
        transform: [
          [
            "babelify", {
              "presets": ["es2015"]
            }
          ]
        ],
      },
      dist: {
        files: {
          "dist/<%= pkg.name %>.js": "index.js" // ['src/*.js', 'src/**/*.js']
        }
      }
    },
    documentation: {
      ast: {
        options: {
          destination: "docs/",
          format: "md",
          version: "<%= pkg.version %>",
          name: "<%= pkg.name %>",
          filename: "AST.md",
          shallow: false
        },
        files: [
          {
            src: ["src/ast.js", "src/ast"]
          }
        ]
      },
      parser: {
        options: {
          destination: "docs/",
          format: "md",
          version: "<%= pkg.version %>",
          name: "<%= pkg.name %>",
          filename: "parser.md",
          shallow: false
        },
        files: [
          {
            src: ["src/parser.js", "src/parser"]
          }
        ]
      },
      lexer: {
        options: {
          destination: "docs/",
          format: "md",
          version: "<%= pkg.version %>",
          name: "<%= pkg.name %>",
          filename: "lexer.md",
          shallow: false
        },
        files: [
          {
            src: ["src/lexer.js", "src/lexer"]
          }
        ]
      },
      main: {
        options: {
          destination: "docs/",
          format: "md",
          version: "<%= pkg.version %>",
          name: "<%= pkg.name %>",
          filename: "README.md",
          shallow: true
        },
        files: [
          {
            src: ["src/index.js"]
          }
        ]
      }
    },
    uglify: {
      options: {
        compress: {
          keep_fnames: true
        },
        sourceMap: true,
        mangle: false,
        maxLineLen: 1024
      },
      dist: {
        src: "dist/<%= pkg.name %>.js",
        dest: "dist/<%= pkg.name %>.min.js"
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-documentation");
  grunt.loadNpmTasks("grunt-babel");

  // Default task(s).
  grunt.registerTask("build", ["browserify", "uglify"]);
  grunt.registerTask("doc", ["documentation"]);
  grunt.registerTask("release", ["browser", "doc"]);
};
