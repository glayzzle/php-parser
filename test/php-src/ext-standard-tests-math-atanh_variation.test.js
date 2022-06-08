// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/atanh_variation.phpt
  it("Test variations in usage of atanh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n//Test atanh with a different input values\n$values = array(23,\n        -23,\n        2.345e1,\n        -2.345e1,\n        0x17,\n        027,\n        \"23\",\n        \"23.45\",\n        \"2.345e1\",\n        \"1000\",\n        true,\n        false);\nfor ($i = 0; $i < count($values); $i++) {\n    $res = atanh($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
