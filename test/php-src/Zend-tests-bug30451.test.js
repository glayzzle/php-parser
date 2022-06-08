// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30451.phpt
  it("Bug #30451 (static properties permissions broken)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected static $property = TRUE;\n    protected static function method() {\n        return TRUE;\n    }\n}\nclass B extends A {\n    public function __construct() {\n        var_dump(self::method());\n        var_dump(parent::method());\n        var_dump(self::$property);\n        var_dump(parent::$property);\n    }\n}\nnew B;\n?>")).toMatchSnapshot();
  });
});
