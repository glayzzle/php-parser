// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_010.phpt
  it("SPL: SplHeap with overridden count()", function () {
    expect(parser.parseCode("<?php\n$obj = new SplMaxHeap();\n$obj->insert(1);\n$obj->insert(2);\nvar_dump(count($obj));\nclass SplMaxHeap2 extends SplMaxHeap{\n    public function count(): int {\n        return -parent::count();\n    }\n}\n$obj = new SplMaxHeap2();\n$obj->insert(1);\n$obj->insert(2);\nvar_dump(count($obj));\n?>")).toMatchSnapshot();
  });
});
