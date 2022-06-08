// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bindec_basic_64bit.phpt
  it("Test bindec() - basic function test bindec()", function () {
    expect(parser.parseCode("<?php\n$values = array(111000111,\n                011100000,\n                1111111111111111111111111111111,\n                10000000000000000000000000000000,\n                100002001,\n                '111000111',\n                '011100000',\n                '1111111111111111111111111111111',\n                '10000000000000000000000000000000',\n                '100002001',\n                'abcdefg',\n                311015,\n                31101.3,\n                31.1013e5,\n                0x111ABC,\n                011237,\n                true,\n                false,\n                );\nfor ($i = 0; $i < count($values); $i++) {\n    $res = bindec($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
