// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/034.phpt
  it("Test nullsafe operator on delayed dim", function () {
    expect(parser.parseCode("<?php\n$arr = [\n    'foo' => null,\n    'bar' => [\n        'baz' => null,\n    ],\n];\nvar_dump($arr['foo']?->something);\nvar_dump($arr['invalid']?->something);\nvar_dump($arr['bar']['baz']?->something);\nvar_dump($arr['bar']['invalid']?->something);\n?>")).toMatchSnapshot();
  });
});
