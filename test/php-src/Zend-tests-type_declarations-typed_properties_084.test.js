// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_084.phpt
  it("Typed properties and class aliases", function () {
    expect(parser.parseCode("<?php\neval(<<<'PHP'\nclass Foo {}\nclass_alias('Foo', 'Bar');\nPHP);\neval(<<<'PHP'\nclass A {\n    public Foo $prop;\n}\nPHP);\neval(<<<'PHP'\nclass B extends A {\n    public Bar $prop;\n}\nPHP);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
