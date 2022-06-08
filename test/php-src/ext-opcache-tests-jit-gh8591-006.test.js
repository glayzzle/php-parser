// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8591-006.phpt
  it("Bug GH-8591 001 (JIT does not account for class re-compile)", function () {
    expect(parser.parseCode("<?php\nclass Model extends AbstractModel\n{\n    public function __construct()\n    {\n        for ($i = 0; $i < 10; $i++) {\n            $this->cast();\n        }\n    }\n}\nnew Model();\nvar_dump($x);\nprint \"OK\";")).toMatchSnapshot();
  });
});
