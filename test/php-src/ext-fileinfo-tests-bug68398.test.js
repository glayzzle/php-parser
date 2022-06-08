// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug68398.phpt
  it("Bug #68398: msooxml matches too many archives", function () {
    expect(parser.parseCode("<?php\n$f = new finfo(FILEINFO_MIME);\nvar_dump($f->file(__DIR__ . DIRECTORY_SEPARATOR . '68398.zip'));\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
