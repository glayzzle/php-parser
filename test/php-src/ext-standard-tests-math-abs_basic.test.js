// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/abs_basic.phpt
  it("Test abs() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing abs() : basic functionality ***\\n\";\n$values = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"-23\",\n                \"23.45\",\n                \"2.345e1\",\n                \"-2.345e1\",\n                null,\n                true,\n                false);\nfor ($i = 0; $i < count($values); $i++) {\n    $res = abs($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
