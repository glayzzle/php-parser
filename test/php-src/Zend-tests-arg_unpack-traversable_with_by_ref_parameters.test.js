// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/traversable_with_by_ref_parameters.phpt
  it("Traversables cannot be unpacked into by-reference parameters", function () {
    expect(parser.parseCode("<?php\nfunction test($val1, $val2, $val3, &$ref) {\n    $ref = 42;\n}\nfunction gen($array) {\n    foreach ($array as $element) {\n        yield $element;\n    }\n}\ntest(1, 2, 3, $b, ...gen([4, 5, 6]));\nvar_dump($b);\ntest(...gen([1, 2, 3, 4]));\ntest(1, 2, ...gen([3, 4]));\ntest(...gen([1, 2]), ...gen([3, 4]));\n?>")).toMatchSnapshot();
  });
});
