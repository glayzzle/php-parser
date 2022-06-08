// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzread_variation1.phpt
  it("Test function gzread() by calling it while file open for writing", function () {
    expect(parser.parseCode("<?php\n$filename = \"gzread_variation1.txt.gz\";\n$h = gzopen($filename, 'w');\n$str = \"Here is the string to be written. \";\nvar_dump(gzread($h, 100));\ngzwrite( $h, $str);\nvar_dump(gzread($h, 100));\ngzrewind($h);\nvar_dump(gzread($h, 100));\ngzclose($h);\n$h = gzopen($filename, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
