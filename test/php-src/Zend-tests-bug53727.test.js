// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53727.phpt
  it("Bug #53727 (Inconsistent behavior of is_subclass_of with interfaces)", function () {
    expect(parser.parseCode("<?php\ninterface MyInterface {\n    const TEST_CONSTANT = true;\n}\nclass ParentClass implements MyInterface { }\nclass ChildClass extends ParentClass { }\necho (is_subclass_of('ChildClass', 'MyInterface') ? 'true' : 'false') . \"\\n\";\necho (defined('ChildClass::TEST_CONSTANT') ? 'true' : 'false') . \"\\n\";\necho (is_subclass_of('ParentClass', 'MyInterface') ? 'true' : 'false') . \"\\n\";\necho (defined('ParentClass::TEST_CONSTANT') ? 'true' : 'false') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
