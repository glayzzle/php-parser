// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_024.phpt
  it("Testing direct assigning for property of object returned by function", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static $bar = array();\n    public function __set($a, $b) {\n        self::$bar[] = $b;\n    }\n    public function __get($a) {\n        /* last */\n        return self::$bar[count(self::$bar)-1];\n    }\n}\nfunction test() {\n    return new foo;\n}\n$a = test()->bar = 1;\nvar_dump($a, count(foo::$bar), test()->whatever);\nprint \"\\n\";\n$a = test()->bar = NULL;\nvar_dump($a, count(foo::$bar), test()->whatever);\nprint \"\\n\";\n$a = test()->bar = test();\nvar_dump($a, count(foo::$bar), test()->whatever);\nprint \"\\n\";\n?>")).toMatchSnapshot();
  });
});
