// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-001.phpt
  it("Bug GH-8461 001 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\n// Checks that JITed code does not crash in --repeat 2 after the UniqueList\n// class is recompiled.\nrequire __DIR__ . '/gh8461-001.inc';\nclass UniqueListLast extends UniqueList\n{\n    public static function bar() {\n        parent::foo();\n    }\n}\nfor ($i = 0; $i < 10; $i++) {\n    UniqueListLast::bar();\n}\n// mark the file as changed (important)\ntouch(__DIR__ . '/gh8461-001.inc');\nprint \"OK\";")).toMatchSnapshot();
  });
});
