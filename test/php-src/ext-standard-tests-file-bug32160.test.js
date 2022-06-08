// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug32160.phpt
  it("Bug #32160 (copying a file into itself leads to data loss)", function () {
    expect(parser.parseCode("<?php\n$path = __DIR__ . \"/bug32160.txt\";\nvar_dump(copy($path, $path));\nchdir(__DIR__);\nvar_dump(copy($path, \"bug32160.txt\"));\nvar_dump(copy(\"bug32160.txt\", \"bug32160.txt\"));\n?>")).toMatchSnapshot();
  });
});
