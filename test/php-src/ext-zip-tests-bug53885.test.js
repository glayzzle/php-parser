// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug53885.phpt
  it("Bug #53885 (ZipArchive segfault with FL_UNCHANGED on empty archive)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__.\"/test53885.zip\";\nif(file_exists($fname)) unlink($fname);\ntouch($fname);\n$nx=new ZipArchive();\n$nx->open($fname);\n$nx->locateName(\"a\",ZIPARCHIVE::FL_UNCHANGED);\n$nx->statName(\"a\",ZIPARCHIVE::FL_UNCHANGED);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
