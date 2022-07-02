// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65372.phpt
  it("Bug #65372 (Segfault in gc_zval_possible_root when return reference fails)", function () {
    expect(parser.parseCode("<?php\nclass ParentClass\n{\n    private static $_OBJECTS;\n    public static function Get()\n    {\n        self::$_OBJECTS[1] = new ChildClass();\n        return self::$_OBJECTS[1];\n    }\n}\nclass ChildClass extends ParentClass\n{\n    public $Manager;\n    function __construct()\n    {\n        $this->Manager = $this;\n    }\n    public static function &GetCurrent()\n    {\n        return ChildClass::Get();\n    }\n    public static function &Get()\n    {\n        return parent::Get();\n    }\n}\n$staff = ChildClass::GetCurrent();\n?>")).toMatchSnapshot();
  });
});
