// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug36308.phpt
  it("Reflection Bug #36308 (ReflectionProperty::getDocComment() does not reflect extended class commentary)", function () {
    expect(parser.parseCode("<?php\nclass Base {\n    /** Base comment block */\n    public $foo = 'bar';\n}\nclass Extended extends Base {\n    /** Extended commentary */\n    public $foo = 'zim';\n}\n$reflect = new ReflectionClass('Extended');\n$props = $reflect->getProperties();\necho $props[0]->getDocComment();\n?>")).toMatchSnapshot();
  });
});
