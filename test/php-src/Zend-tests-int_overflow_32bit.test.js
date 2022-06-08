// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_overflow_32bit.phpt
  it("testing integer overflow (32bit)", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n    2147483648,\n    2147483649,\n    2147483658,\n    2147483748,\n    2147484648,\n    );\nforeach ($doubles as $d) {\n    $l = (int)$d;\n    var_dump($l);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
