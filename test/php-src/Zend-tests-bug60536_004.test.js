// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60536_004.phpt
  it("Introducing new private variables of the same name in a subclass is ok, and does not lead to any output. That is consistent with normal inheritance handling. (relevant to #60536)", function () {
    expect(parser.parseCode("<?php\nclass Base {\n  private $hello;\n}\ntrait THello1 {\n  private $hello;\n}\n// Now we use the trait, which happens to introduce another private variable\n// but they are distinct, and not related to each other, so no warning.\necho \"PRE-CLASS-GUARD\\n\";\nclass SameNameInSubClassNoNotice extends Base {\n    use THello1;\n}\necho \"POST-CLASS-GUARD\\n\";\n// now the same with a class that defines the property itself,\n// that should give the expected strict warning.\nclass Notice extends Base {\n    use THello1;\n    private $hello;\n}\necho \"POST-CLASS-GUARD2\\n\";\n?>")).toMatchSnapshot();
  });
});
