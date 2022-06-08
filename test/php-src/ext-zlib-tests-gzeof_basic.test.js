// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzeof_basic.phpt
  it("Test function feof() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n// note that gzeof is an alias to gzeof. parameter checking tests will be\n// the same as gzeof\n$f = __DIR__.\"/004.txt.gz\";\necho \"-- test 1 --\\n\";\n$h = gzopen($f, 'r');\nvar_dump(gzeof($h));\ngzpassthru($h);\nvar_dump(gzeof($h));\ngzclose($h);\necho \"\\n-- test 2 --\\n\";\n$h = gzopen($f, 'r');\necho \"reading 50 characters. eof should be false\\n\";\ngzread($h, 50).\"\\n\";\nvar_dump(gzeof($h));\necho \"reading 250 characters. eof should be true\\n\";\ngzread($h, 250).\"\\n\";\nvar_dump(gzeof($h));\necho \"reading 20 characters. eof should be true still\\n\";\ngzread($h, 20).\"\\n\";\nvar_dump(gzeof($h));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
