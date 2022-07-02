// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/hexdec_basic.phpt
  it("Test hexdec() - basic function test hexdec()", function () {
    expect(parser.parseCode("<?php\n$values = array(0x123abc,\n                0x789DEF,\n                0x7FFFFFFF,\n                0x80000000,\n                '0x123abc',\n                '0x789DEF',\n                '0x7FFFFFFF',\n                '0x80000000',\n                '0x123XYZABC',\n                311015,\n                '311015',\n                31101.3,\n                31.1013e5,\n                011237,\n                '011237',\n                true,\n                false,\n                );\nfor ($i = 0; $i < count($values); $i++) {\n    $res = hexdec($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
