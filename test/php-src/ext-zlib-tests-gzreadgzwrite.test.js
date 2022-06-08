// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzreadgzwrite.phpt
  it("gzopen(), gzread(), gzwrite()", function () {
    expect(parser.parseCode("<?php\n$original = str_repeat(\"hallo php\",4096);\n$filename = tempnam(sys_get_temp_dir(), \"phpt\");\n$fp = gzopen($filename, \"wb\");\ngzwrite($fp, $original);\nvar_dump(strlen($original));\nvar_dump(gztell($fp));\nfclose($fp);\n$fp = gzopen($filename, \"rb\");\n$data = '';\nwhile ($buf = gzread($fp, 8092)) {\n    $data .= $buf;\n}\nif ($data == $original) {\n    echo \"Strings are equal\\n\";\n} else {\n    echo \"Strings are not equal\\n\";\n    var_dump($data);\n}\ngzclose($fp);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
