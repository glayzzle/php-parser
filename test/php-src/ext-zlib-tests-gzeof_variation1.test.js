// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzeof_variation1.phpt
  it("Test function gzeof while writing.", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/gzeof_variation1.txt.gz\";\n$h = gzopen($filename, 'w');\n$str = \"Here is the string to be written. \";\n$length = 10;\ngzwrite( $h, $str );\nvar_dump(gzeof($h));\ngzwrite( $h, $str, $length);\nvar_dump(gzeof($h));\ngzclose($h);\ntry {\n    var_dump(gzeof($h));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
