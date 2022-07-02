// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/directory_wrapper_fstat_basic.phpt
  it("Test function fstat() on directory wrapper", function () {
    expect(parser.parseCode("<?php\n$d = __DIR__;\n$h = opendir($d);\nvar_dump(fstat($h));\nclosedir($h);\n?>")).toMatchSnapshot();
  });
});
