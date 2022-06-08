// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_heap_is_empty_basic.phpt
  it("SPL: SplHeap, test trivial method to find if a heap is empty", function () {
    expect(parser.parseCode("<?php\nclass MyHeap extends SplHeap{\npublic function compare($a, $b): int {\nreturn $a < $b;\n}\n}\n$heap = new MyHeap();\nvar_dump($heap->isEmpty());\n$heap->insert(1);\nvar_dump($heap->isEmpty());\n$heap->extract();\nvar_dump($heap->isEmpty());\n?>")).toMatchSnapshot();
  });
});
