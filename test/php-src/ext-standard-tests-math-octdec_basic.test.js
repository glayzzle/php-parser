// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/octdec_basic.phpt
  it("Test octdec() - basic function test octdec()", function () {
    expect(parser.parseCode("<?php\n$values = array(01234567,\n                0567,\n                017777777777,\n                020000000000,\n                0x1234ABC,\n                12345,\n                '01234567',\n                '0567',\n                '017777777777',\n                '020000000000',\n                '0x1234ABC',\n                '12345',\n                31101.3,\n                31.1013e5,\n                true,\n                false,\n                );\nfor ($i = 0; $i < count($values); $i++) {\n    $res = octdec($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
