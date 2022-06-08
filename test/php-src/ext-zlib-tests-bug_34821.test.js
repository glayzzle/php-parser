// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug_34821.phpt
  it("Bug #34821 (zlib encoders fail on widely varying binary data)", function () {
    expect(parser.parseCode("<?php\n// test 50 bytes to 50k\n$b = array(\n    50,\n    500,\n    5000,\n    50000,\n//\t1000000, // works, but test would take too long\n);\n$s = '';\n$i = 0;\nforeach ($b as $size) {\n    do {\n        $s .= chr(rand(0,255));\n    } while (++$i < $size);\n    var_dump($s === gzinflate(gzdeflate($s)));\n    var_dump($s === gzuncompress(gzcompress($s)));\n    var_dump($s === gzinflate(substr(gzencode($s), 10, -8)));\n}\n?>")).toMatchSnapshot();
  });
});
