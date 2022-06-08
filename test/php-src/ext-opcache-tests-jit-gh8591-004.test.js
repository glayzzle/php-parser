// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8591-004.phpt
  it("Bug GH-8591 004 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\n// Checks that JITed code does not crash in --repeat 2 after the ModelTrait\n// trait is recompiled and Model is re-linked.\nrequire __DIR__ . '/gh8591-004.inc';\nclass Model\n{\n    use ModelTrait;\n    protected static int $field = 1;\n    public function __construct()\n    {\n        for ($i = 0; $i < 10; $i++) {\n            $this->cast();\n        }\n    }\n    private function cast()\n    {\n        global $x;\n        $x = static::$field;\n    }\n}\nnew Model();\n// mark the file as changed (important)\ntouch(__DIR__ . '/gh8591-004.inc');\nvar_dump($x);\nprint \"OK\";")).toMatchSnapshot();
  });
});
