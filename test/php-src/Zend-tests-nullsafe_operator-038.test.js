// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/038.phpt
  it("Test nullsafe operator in nested delayed dims 2", function () {
    expect(parser.parseCode("<?php\n$foo = (object) ['bar' => 0];\n$array = [[null]];\nvar_dump($array[0][$foo->bar]?->baz);\n?>")).toMatchSnapshot();
  });
});
