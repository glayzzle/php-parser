// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug67647.phpt
  it("Bug #67647: Bundled libmagic 5.17 does not detect quicktime files correctly", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__ . DIRECTORY_SEPARATOR . \"67647.mov\";\n$fi = new finfo(FILEINFO_MIME_TYPE);\nvar_dump($fi->file($f));\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
