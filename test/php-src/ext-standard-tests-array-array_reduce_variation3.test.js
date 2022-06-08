// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reduce_variation3.phpt
  it("Test array_reduce() function : variation - object callbacks", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_reduce() : variation - object callbacks ***\\n\";\nclass A {\n  static function adder($a, $b) {return $a + $b;}\n  public function adder2($a, $b) {return $a + $b;}\n}\n$array = array(1);\necho \"\\n--- Static method callback ---\\n\";\nvar_dump(array_reduce($array, array(\"A\", \"adder\")));\necho \"\\n--- Instance method callback ---\\n\";\nvar_dump(array_reduce($array, array(new A(), \"adder2\")));\n?>")).toMatchSnapshot();
  });
});
