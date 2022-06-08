// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/unreachable_block.phpt
  it("JIT unreachable_block with block order", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function Value()\n    {\n        switch ($this->returnType) {\n            case 'float':  return $this->returnTypeNullable ? null : 0;\n            default: return;\n        }\n    }\n}\n?>\nokey")).toMatchSnapshot();
  });
});
