// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug45181.phpt
  it("Bug #45181 (chdir() should clear relative entries in stat cache)", function () {
    expect(parser.parseCode("<?php\nmkdir(\"bug45181_x\");\nvar_dump(is_dir(\"bug45181_x\"));\nchdir(\"bug45181_x\");\nvar_dump(is_dir(\"bug45181_x\"));\n?>")).toMatchSnapshot();
  });
});
