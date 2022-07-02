// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/pow_basic_64bit.phpt
  it("Test pow() - basic function test pow()", function () {
    expect(parser.parseCode("<?php\n$bases = array(23,\n                -23,\n                23.1,\n                -23.1,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                PHP_INT_MAX,\n                -PHP_INT_MAX - 1);\n$exponents = array(0,\n               1,\n               -1,\n               2,\n               -2,\n               3,\n               -3,\n               2.5,\n               -2.5,\n               500,\n               -500,\n               2147483647,\n               -2147483648);\nforeach($bases as $base) {\n    echo \"\\n\\nBase = $base\";\n    foreach($exponents as $exponent) {\n        echo \"\\n..... Exponent = $exponent Result = \";\n        $res = pow($base, $exponent);\n        echo $res;\n    }\n    echo \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
