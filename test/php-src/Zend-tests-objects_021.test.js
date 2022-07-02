// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_021.phpt
  it("Testing magic methods __set, __get and __call in cascade", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static public $i = 0;\n    public function __construct() {\n        self::$i++;\n    }\n    public function __set($a, $b) {\n        return x();\n    }\n    public function __get($a) {\n        return x();\n    }\n    public function __call($a, $b) {\n        return x();\n    }\n}\nfunction x() {\n    return new test;\n}\nx()\n    ->a\n        ->b()\n            ->c\t= 1;\nvar_dump(test::$i);\n?>")).toMatchSnapshot();
  });
});
