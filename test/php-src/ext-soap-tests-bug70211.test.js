// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug70211.phpt
  it("Bug #70211 (php 7 ZEND_HASH_IF_FULL_DO_RESIZE use after free)", function () {
    expect(parser.parseCode("<?php\n$addr = 0x4141414141414141;\nfunction ptr2str($ptr)\n{\n    $out = \"\";\n    for ($i=0; $i<8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n$sf = new SoapFault('1', 'string', 'detail', 'header','line', str_repeat(\"A\",232).ptr2str($addr));\n$ob = unserialize(\"a:3:{i:0;\".serialize($sf).'i:1;R:13;i:2;R:11;}');\nvar_dump($ob[1]);\n?>")).toMatchSnapshot();
  });
});
