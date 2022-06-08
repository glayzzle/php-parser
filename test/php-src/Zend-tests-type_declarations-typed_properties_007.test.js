// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_007.phpt
  it("Test typed properties inheritance", function () {
    expect(parser.parseCode("<?php\nclass Whatever {}\nclass Thing extends Whatever {}\nclass Foo {\n    public Whatever $qux;\n}\nclass Bar extends Foo {\n    public Thing $qux;\n}\n?>")).toMatchSnapshot();
  });
});
