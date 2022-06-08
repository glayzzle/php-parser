// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_current_variation_001.phpt
  it("SPL: SplHeap::current - get current value from empty heap", function () {
    expect(parser.parseCode("<?php\nclass myHeap extends SplHeap\n{\n    public function compare($v1, $v2): int\n    {\n        throw new Exception('');\n    }\n}\n$heap = new myHeap();\nvar_dump($heap->current());\n?>")).toMatchSnapshot();
  });
});
