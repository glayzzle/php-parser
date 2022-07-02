// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_array_key.phpt
  it("Array keys can be yielded from generators", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield [] => 1;\n}\n$gen = gen();\nvar_dump($gen->key());\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
