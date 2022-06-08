// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzreadgzwriteplain.phpt
  it("gzopen(), gzread(), gzwrite() for non-compressed data", function () {
    expect(parser.parseCode("<?php\n$original = str_repeat(\"hallo php\",4096);\n$filename = tempnam(sys_get_temp_dir(), \"phpt\");\n$fp = fopen($filename, \"wb\");\nfwrite($fp, $original);\nvar_dump(strlen($original));\nvar_dump(ftell($fp));\nfclose($fp);\n$fp = gzopen($filename, \"rb\");\n$data = '';\nwhile ($buf = gzread($fp, 8192)) {\n    $data .= $buf;\n}\nif ($data == $original) {\n    echo \"Strings are equal\\n\";\n} else {\n    echo \"Strings are not equal\\n\";\n    var_dump($data);\n}\ngzseek($fp, strlen($original) / 2);\n$data = '';\nwhile ($buf = gzread($fp, 8192)) {\n    $data .= $buf;\n}\nvar_dump(strlen($data));\nif ($data == substr($original, strlen($original) / 2)) {\n    echo \"Strings are equal\\n\";\n} else {\n    echo \"Strings are not equal\\n\";\n    var_dump($data);\n}\ngzclose($fp);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
