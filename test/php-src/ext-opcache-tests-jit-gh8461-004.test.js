// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-004.phpt
  it("Bug GH-8461 004 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\n// Checks that JITed code does not crash in --repeat 2 after the UniqueList\n// class changes.\nif (!isset(opcache_get_status()['scripts'][__DIR__ . '/gh8461-004.inc'])) {\n    $initialRequest = true;\n    require __DIR__ . '/gh8461-004.inc';\n} else {\n    $initialRequest = false;\n    $y = 0;\n    class UniqueList\n    {\n        public const A = 1;\n        public const B = 1;\n        private $foo;\n        public function __construct($b)\n        {\n            global $y;\n            $y++;\n            $this->foo = self::A + $b;\n        }\n    }\n}\nclass UniqueListLast extends UniqueList\n{\n    public function __construct()\n    {\n        parent::__construct(self::B);\n    }\n}\nfor ($i = 0; $i < 10; $i++) {\n    new UniqueListLast();\n}\nvar_dump($initialRequest ? $x : $y);\nprint \"OK\";")).toMatchSnapshot();
  });
});
