// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_variation5.phpt
  it("Test dir() function : usage variations - open a file instead of directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing a file as argument to dir() function instead of a directory\n * and checking if proper warning message is generated.\n */\necho \"*** Testing dir() : open a file instead of a directory ***\\n\";\n// open the file instead of directory\n$d = dir(__FILE__);\nvar_dump( $d );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
