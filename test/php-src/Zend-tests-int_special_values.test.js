// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_special_values.phpt
  it("Conversion of special float values to int", function () {
    expect(parser.parseCode("<?php\n$values = [\n    0.0,\n    INF,\n    -INF,\n    1 / INF,\n    -1 / INF, // Negative zero,\n    NAN\n];\nforeach($values as $value) {\n    var_dump($value);\n    var_dump((int)$value);\n    echo PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
