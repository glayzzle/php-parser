// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/is_infinite_basic.phpt
  it("Test is_infinite() - basic function test is_infinite()", function () {
    expect(parser.parseCode("<?php\n$values = array(234,\n                -234,\n                23.45e1,\n                -23.45e1,\n                0xEA,\n                0352,\n                \"234\",\n                \"234.5\",\n                \"23.45e1\",\n                true,\n                false,\n                pow(0, -2),\n                acos(1.01));\n;\nfor ($i = 0; $i < count($values); $i++) {\n    $res = is_infinite($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
