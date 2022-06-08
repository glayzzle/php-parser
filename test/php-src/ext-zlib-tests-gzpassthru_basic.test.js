// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzpassthru_basic.phpt
  it("Test function gzpassthru() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n// note that gzpassthru is an alias to fpassthru. parameter checking tests will be\n// the same as fpassthru\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\nvar_dump(gzpassthru($h));\nvar_dump(gzpassthru($h));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
