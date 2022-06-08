// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/generator_return_multiple_classes.phpt
  it("Generator return type with multiple classes", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    public function test(): Generator|ArrayAccess|array;\n}\nclass C implements I {\n    function test(): Generator|ArrayAccess|array {\n        yield;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
