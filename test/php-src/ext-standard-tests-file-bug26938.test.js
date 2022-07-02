// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug26938.phpt
  it("Bug #26938 (exec does not read consecutive long lines correctly)", function () {
    expect(parser.parseCode("<?php\n$out = array();\n$status = -1;\n$php = getenv('TEST_PHP_EXECUTABLE');\nif (substr(PHP_OS, 0, 3) != 'WIN') {\n    exec($php . ' -n -r \\''\n         . '$lengths = array(10,20000,10000,5,10000,3);'\n         . 'foreach($lengths as $length) {'\n         . '  for($i=0;$i<$length;$i++) print chr(65+$i % 27);'\n         . '  print \"\\n\";'\n         . '}\\'', $out, $status);\n} else {\n    exec($php . ' -n -r \"'\n         . '$lengths = array(10,20000,10000,5,10000,3);'\n         . 'foreach($lengths as $length) {'\n         . '  for($i=0;$i<$length;$i++) print chr(65+$i % 27);'\n         . '  print \\\\\"\\\\n\\\\\";'\n         . '}\"', $out, $status);\n}\nfor ($i=0;$i<6;$i++)\n     print \"md5(line $i)= \" . md5($out[$i]) . \" (length \" .\nstrlen($out[$i]) . \")\\n\";\n?>")).toMatchSnapshot();
  });
});
