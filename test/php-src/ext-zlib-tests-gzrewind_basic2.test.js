// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzrewind_basic2.phpt
  it("Test function gzrewind() by calling it with its expected arguments when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n// read to the end of the file\necho \"read to the end of the file, then rewind\\n\";\ngzread($h, 10000);\nvar_dump(gzeof($h));\nvar_dump(gztell($h));\ngzrewind($h);\nvar_dump(gzeof($h));\nvar_dump(gztell($h));\necho \"first 20 characters=\".gzread($h,20).\"\\n\";\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
