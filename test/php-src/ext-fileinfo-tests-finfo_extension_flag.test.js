// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_extension_flag.phpt
  it("Test FILEINFO_EXTENSION flag", function () {
    expect(parser.parseCode("<?php\n$f = new finfo;\nvar_dump($f->file(__DIR__ . \"/resources/test.jpg\", FILEINFO_EXTENSION));\n?>")).toMatchSnapshot();
  });
});
