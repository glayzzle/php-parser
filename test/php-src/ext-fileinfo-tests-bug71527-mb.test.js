// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug71527-mb.phpt
  it("Bug #71527 Buffer over-write in finfo_open with malformed magic file", function () {
    expect(parser.parseCode("<?php\n    $finfo = finfo_open(FILEINFO_NONE, __DIR__ . DIRECTORY_SEPARATOR . \"bug71527私はガラスを食べられます.magic\");\n    var_dump($finfo);\n?>")).toMatchSnapshot();
  });
});
