// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/rand_inverted_order.phpt
  it("Test rand function when min and max are in proper or inverted order", function () {
    expect(parser.parseCode("<?php\n$min_value = 10;\n$max_value = 20;\n$correct_order = rand($min_value, $max_value);\n$incorrect_order = rand($max_value, $min_value);\nvar_dump($correct_order >= $min_value);\nvar_dump($correct_order <= $max_value);\nvar_dump($incorrect_order >= $min_value);\nvar_dump($incorrect_order <= $max_value);\n?>")).toMatchSnapshot();
  });
});
