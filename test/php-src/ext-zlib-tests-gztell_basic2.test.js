// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gztell_basic2.phpt
  it("Test function gztell() by calling it with its expected arguments when writing", function () {
    expect(parser.parseCode("<?php\n$f = \"gztell_basic2.txt.gz\";\n$h = gzopen($f, 'w');\n$sizes = array(7, 22, 54, 17, 27, 15, 1000);\n// tell should be 7, 29, 83, 100, 127, 142, 1142\nvar_dump(gztell($h));\nforeach ($sizes as $size) {\n   echo \"bytes written=\".gzwrite($h, str_repeat('1', $size)).\"\\n\";\n   echo \"tell=\".gztell($h).\"\\n\";\n}\ngzclose($h);\nunlink($f);\n?>")).toMatchSnapshot();
  });
});
