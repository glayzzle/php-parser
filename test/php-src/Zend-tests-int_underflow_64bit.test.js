// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_underflow_64bit.phpt
  it("testing integer underflow (64bit)", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n        -9223372036854775808,\n        -9223372036854775809,\n        -9223372036854775818,\n        -9223372036854775908,\n        -9223372036854776808,\n        );\nforeach ($doubles as $d) {\n        $l = (int)$d;\n        var_dump($l);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
