// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-003.phpt
  it("Bug GH-8461 003 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\n// Checks that JITed code does not crash in --repeat 2 after the UniqueList\n// class is recompiled.\nrequire __DIR__ . '/gh8461-003.inc';\nclass UniqueListLast extends UniqueList\n{\n    public function __construct()\n    {\n        parent::__construct(self::B);\n    }\n}\nfor ($i = 0; $i < 10; $i++) {\n    new UniqueListLast();\n}\n// mark the file as changed (important)\ntouch(__DIR__ . '/gh8461-003.inc');\nprint \"OK\";")).toMatchSnapshot();
  });
});
