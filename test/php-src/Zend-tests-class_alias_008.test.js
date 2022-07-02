// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_008.phpt
  it("Testing class_alias() with abstract class using an arbitrary class name as alias", function () {
    expect(parser.parseCode("<?php\nabstract class foo { }\nclass_alias('foo', \"\\0\");\n$a = \"\\0\";\nnew $a;\n?>")).toMatchSnapshot();
  });
});
