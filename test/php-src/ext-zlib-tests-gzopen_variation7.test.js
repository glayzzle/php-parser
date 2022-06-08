// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_variation7.phpt
  it("Test function gzopen() by calling it twice on the same file and not closing one of them at the end of the script", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h1 = gzopen($f, 'r');\n$h2 = gzopen($f, 'r');\nvar_dump(gzread($h1, 30));\nvar_dump(gzread($h2, 10));\nvar_dump(gzread($h1, 15));\ngzclose($h1);\nvar_dump(gzread($h2, 50));\n// deliberately do not close $h2\n?>")).toMatchSnapshot();
  });
});
