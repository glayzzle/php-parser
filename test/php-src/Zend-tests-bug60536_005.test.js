// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60536_005.phpt
  it("Introducing new private variables of the same name in a subclass is ok, and does not lead to any output. That is consistent with normal inheritance handling. (relevant to #60536)", function () {
    expect(parser.parseCode("<?php\nclass Base {\n  protected $hello;\n}\ntrait THello1 {\n  protected $hello;\n}\n// Protected and public are handle more strict with a warning then what is\n// expected from normal inheritance since they can have easier coliding semantics\necho \"PRE-CLASS-GUARD\\n\";\nclass SameNameInSubClassProducesNotice extends Base {\n    use THello1;\n}\necho \"POST-CLASS-GUARD\\n\";\n// now the same with a class that defines the property itself, too.\nclass Notice extends Base {\n    use THello1;\n    protected $hello;\n}\necho \"POST-CLASS-GUARD2\\n\";\n?>")).toMatchSnapshot();
  });
});
