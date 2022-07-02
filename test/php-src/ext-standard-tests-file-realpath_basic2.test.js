// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_basic2.phpt
  it("realpath() with relative directory", function () {
    expect(parser.parseCode("<?php\nvar_dump(realpath('.') == realpath(getcwd()));\nchdir('..');\nvar_dump(realpath('.') == realpath(getcwd()));\n?>")).toMatchSnapshot();
  });
});
