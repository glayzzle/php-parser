// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug71542.phpt
  it("Bug #71542 (disk_total_space does not work with relative paths)", function () {
    expect(parser.parseCode("<?php\n$dir = basename(getcwd());\nchdir(\"..\");\nvar_dump(\n    disk_total_space($dir) !== false,\n    disk_free_space($dir) !== false\n);\n?>")).toMatchSnapshot();
  });
});
