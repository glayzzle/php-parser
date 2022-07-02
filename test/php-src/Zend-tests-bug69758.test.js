// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69758.phpt
  it("Bug #69758 (Item added to array not being removed by array_pop/shift)", function () {
    expect(parser.parseCode("<?php\n$tokens     = array();\n$conditions = array();\nfor ($i = 0; $i <= 10; $i++) {\n    $tokens[$i] = $conditions;\n    // First integer must be less than 8\n    // and second must be 8, 9 or 10\n    if ($i !== 0 && $i !== 8) {\n        continue;\n    }\n    // Add condition and then pop off straight away.\n    // Can also use array_shift() here.\n    $conditions[$i] = true;\n    $oldCondition = array_pop($conditions);\n}\n// Conditions should be empty.\nvar_dump($conditions);\n?>")).toMatchSnapshot();
  });
});
