// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug67516.phpt
  it("Bug #67516 wrong mimetypes with finfo_file(filename, FILEINFO_MIME_TYPE)", function () {
    expect(parser.parseCode("<?php\n$f = new finfo;\nvar_dump($f->file(__DIR__ . \"/bug67516.gif\", FILEINFO_MIME_TYPE));\nvar_dump($f->file(__DIR__ . \"/bug67516.gif\", FILEINFO_MIME));\n?>")).toMatchSnapshot();
  });
});
