// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzrewind_variation1.phpt
  it("Test function gzrewind() by calling it with its expected arguments when writing", function () {
    expect(parser.parseCode("<?php\n$f = \"gzrewind_variation1.txt.gz\";\n$h = gzopen($f, 'w');\ngzwrite($h, 'The first string.');\nvar_dump(gzrewind($h));\ngzwrite($h, 'The second string.');\ngzclose($h);\n$h = gzopen($f, 'r');\ngzpassthru($h);\ngzclose($h);\nunlink($f);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
