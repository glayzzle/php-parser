// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_by_ref.phpt
  it("Constructor promotion of by-ref parameter", function () {
    expect(parser.parseCode("<?php\nclass Ary {\n    public function __construct(public array &$array) {}\n}\n$array = [];\n$ary = new Ary($array);\n$array[] = 42;\nvar_dump($ary->array);\n?>")).toMatchSnapshot();
  });
});
