// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_basic.phpt
  it("Test gzopen() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzopen() : basic functionality ***\\n\";\n// Initialise all required variables\n$filename = __DIR__.\"/004.txt.gz\";\n$mode = 'r';\n$use_include_path = false;\n// Calling gzopen() with all possible arguments\n$h = gzopen($filename, $mode, $use_include_path);\ngzpassthru($h);\ngzclose($h);\n// Calling gzopen() with mandatory arguments\n$h = gzopen($filename, $mode);\ngzpassthru($h);\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
