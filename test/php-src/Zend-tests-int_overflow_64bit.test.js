// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_overflow_64bit.phpt
  it("testing integer overflow (64bit)", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n        PHP_INT_MAX,\n        PHP_INT_MAX + 1,\n        PHP_INT_MAX + 1000,\n        PHP_INT_MAX * 2 + 4,\n        -PHP_INT_MAX -1,\n        -PHP_INT_MAX -2,\n        -PHP_INT_MAX -1000,\n        );\nforeach ($doubles as $d) {\n        $l = (int)$d;\n        var_dump($l);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
