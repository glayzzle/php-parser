// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_error_folder-win.phpt
  it("Test file_get_contents() function : error when passing folder - on Windows", function () {
    expect(parser.parseCode("<?php\nfile_get_contents(__DIR__);\n?>")).toMatchSnapshot();
  });
});
