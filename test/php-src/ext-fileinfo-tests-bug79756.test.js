// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug79756.phpt
  it("Bug #79756 (finfo_file crash (FILEINFO_MIME))", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug79756.xls';\n$finfo = finfo_open(FILEINFO_MIME);\n$mime = finfo_file($finfo, $filename);\nfinfo_close($finfo);\necho $mime;\n?>")).toMatchSnapshot();
  });
});
