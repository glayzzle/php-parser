// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug79283.phpt
  it("Bug #79283 (Segfault in libmagic patch contains a buffer overflow)", function () {
    expect(parser.parseCode("<?php\n$magic_file = __DIR__ . '/bug79283.db';\nfile_put_contents($magic_file, \"\n0\tregex\t\\\\0\\\\0\\\\0\\\\0\tTest\n\");\n$finfo = new finfo(FILEINFO_NONE, $magic_file);\nvar_dump($finfo->buffer(\"buffer\\n\"));\n?>")).toMatchSnapshot();
  });
});
