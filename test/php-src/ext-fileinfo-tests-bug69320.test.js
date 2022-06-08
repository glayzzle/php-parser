// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug69320.phpt
  it("Bug #69320 libmagic crash when running laravel tests", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . DIRECTORY_SEPARATOR . \"bug69320.txt\";\nfile_put_contents($fname, \"foo\");\nvar_dump(finfo_file(finfo_open(FILEINFO_MIME_TYPE), $fname));\n?>")).toMatchSnapshot();
  });
});
