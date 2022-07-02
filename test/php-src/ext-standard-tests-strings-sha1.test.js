// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sha1.phpt
  it("sha1() with ASCII output", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/sha1.dat\";\n$a = array(\n    \"abc\",\n    \"abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq\",\n    \"a\",\n    \"0123456701234567012345670123456701234567012345670123456701234567\",\n    \"\"\n);\nforeach ($a as $str) {\n    var_dump($val1 = sha1($str));\n    file_put_contents($filename, $str);\n    var_dump($val2 = sha1_file($filename));\n    var_dump($val1 === $val2);\n}\nvar_dump(sha1($str, true));\nvar_dump(sha1_file($filename, true));\n@unlink($filename);\nsha1_file($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
