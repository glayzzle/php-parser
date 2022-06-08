// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_036.phpt
  it("Test uninitialized typed properties normal foreach must not be yielded", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public int $bar = 10, $qux;\n};\nforeach ($foo as $key => $bar) {\n    var_dump($key, $bar);\n}\n?>")).toMatchSnapshot();
  });
});
