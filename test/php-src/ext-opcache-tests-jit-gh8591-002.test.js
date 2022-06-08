// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8591-002.phpt
  it("Bug GH-8591 002 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\n// Checks that JITed code does not crash in --repeat 2 after the ModelInterface\n// interface changes and Model is re-linked.\nif (!isset(opcache_get_status()['scripts'][__DIR__ . '/gh8591-002.inc'])) {\n    require __DIR__ . '/gh8591-001.inc';\n} else {\n    interface ModelInterace\n    {\n    }\n}\nclass Model implements ModelInterface\n{\n    protected static int $field = 1;\n    public function __construct()\n    {\n        for ($i = 0; $i < 10; $i++) {\n            $this->cast();\n        }\n    }\n    private function cast()\n    {\n        global $x;\n        $x = static::$field;\n    }\n}\nnew Model();\nvar_dump($x);\nprint \"OK\";")).toMatchSnapshot();
  });
});
