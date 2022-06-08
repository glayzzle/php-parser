// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzrewind_basic.phpt
  it("Test function gzrewind() by calling it with its expected arguments when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\necho \"test rewind before doing anything\\n\";\nvar_dump(gzrewind($h));\nvar_dump(gztell($h));\necho \"\\nfirst 30 characters=\".gzread($h, 30).\"\\n\";\nvar_dump(gztell($h));\ngzrewind($h);\nvar_dump(gztell($h));\necho \"first 10 characters=\".gzread($h, 10).\"\\n\";\ngzrewind($h);\necho \"first 20 characters=\".gzread($h, 20).\"\\n\";\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
