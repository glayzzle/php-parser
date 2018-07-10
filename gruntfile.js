module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
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
    }
  });

  grunt.loadNpmTasks("grunt-documentation");
  grunt.registerTask("default", ["documentation"]);
  grunt.registerTask("doc", ["documentation"]);
};
