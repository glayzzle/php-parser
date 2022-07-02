// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/acosh_variation.phpt
  it("Test variations in usage of acosh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n//Test acosh with a different input values\n$values = array(23,\n        -23,\n        2.345e1,\n        -2.345e1,\n        0x17,\n        027,\n        \"23\",\n        \"23.45\",\n        \"2.345e1\",\n        \"1000\",\n        true,\n        false);\nfor ($i = 0; $i < count($values); $i++) {\n    $res = acosh($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
