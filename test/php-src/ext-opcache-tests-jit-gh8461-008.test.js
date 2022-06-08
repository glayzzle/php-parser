// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-008.phpt
  it("Bug GH-8461 008 (JIT does not account for function re-compile)", function () {
    expect(parser.parseCode("<?php\n$x = 0;\nclass UniqueList\n{\n    const A = 1;\n    const B = 1;\n    private $foo;\n    public function __construct($b)\n    {\n        global $x;\n        $x++;\n        $this->foo = self::A + $b;\n    }\n    public static function foo()\n    {\n        global $x;\n        $x += self::A;\n    }\n}\nclass UniqueListLast extends UniqueList\n{\n    public function __construct()\n    {\n        parent::__construct(self::B);\n    }\n    public static function bar() {\n        parent::foo();\n    }\n}\nfunction test() {\n        global $x;\n        $x += 1;\n}\nfor ($i = 0; $i < 100; $i++) {\n    UniqueListLast::bar();\n}\nfor ($i = 0; $i < 100; $i++) {\n    new UniqueListLast();\n}\nfor ($i = 0; $i < 10; $i++) {\n    test();\n}\nprint \"OK\";")).toMatchSnapshot();
  });
});
