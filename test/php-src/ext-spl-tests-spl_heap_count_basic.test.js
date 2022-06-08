// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_heap_count_basic.phpt
  it("SPL: SplHeap, Test spl_heap_object_count_elements (spl_heap.c:490) for returning count() failure for Heaps", function () {
    expect(parser.parseCode("<?php\nclass MyHeap extends SplHeap\n{\n    public function compare($a,$b): int\n    {\n        return ($a < $b);\n    }\n    public function count(): int // override count to force failure\n    {\n        throw new Exception('Cause count to fail');\n        return parent::count();\n    }\n}\n$heap = new MyHeap();\n$heap->insert(1);\ntry {\n    count($heap);// refers to MyHeap->count() method\n} catch (Exception $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
