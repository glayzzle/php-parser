// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/log1p_basic.phpt
  it("Test log1p() - basic function test log1p()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing log1p() : basic functionality ***\\n\";\n$values = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                true,\n                false);\necho \"\\n LOG1p tests\\n\";\nforeach($values as $value) {\n    echo \"\\n-- log1p $value --\\n\";\n    var_dump(log1p($value));\n};\n?>")).toMatchSnapshot();
  });
});
