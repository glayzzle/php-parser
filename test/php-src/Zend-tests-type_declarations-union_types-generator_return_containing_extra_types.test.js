// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/generator_return_containing_extra_types.phpt
  it("Generator return value has to have Traversable-ish, but may also have extra types", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    public function test(): iterable|false;\n}\nclass C implements I {\n    public function test(): iterable|false {\n        yield;\n    }\n}\nvar_dump((new C)->test());\n?>")).toMatchSnapshot();
  });
});
