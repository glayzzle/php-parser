// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/037.phpt
  it("Test nullsafe operator in nested delayed dims", function () {
    expect(parser.parseCode("<?php\n$foo = new stdClass();\n$foo->bar = 'bar';\n$array = ['foo' => ['bar' => 'baz']];\nvar_dump($array['foo'][$foo?->bar]);\n?>")).toMatchSnapshot();
  });
});
