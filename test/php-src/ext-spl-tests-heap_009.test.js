// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_009.phpt
  it("SPL: SplHeap and friends, throw: An iterator cannot be used with foreach by reference", function () {
    expect(parser.parseCode("<?php\nfunction testForException( $heap )\n{\n    try\n    {\n        foreach( $heap as &$item );\n    }\n    catch( \\Error $e )\n    {\n        echo $e->getMessage(),\"\\n\";\n    }\n}\n// 1. SplMinHeap empty\n$heap = new SplMinHeap;\ntestForException( $heap );\n// 2. SplMinHeap non-empty\n$heap = new SplMinHeap;\n$heap->insert( 1 );\ntestForException( $heap );\n// 3. SplMaxHeap empty\n$heap = new SplMaxHeap;\ntestForException( $heap );\n// 4. SplMaxHeap non-empty\n$heap = new SplMaxHeap;\n$heap->insert( 1 );\ntestForException( $heap );\n// 5. SplPriorityQueue empty\n$heap = new SplPriorityQueue;\ntestForException( $heap );\n// 6. SplPriorityQueue non-empty\n$heap = new SplPriorityQueue;\n$heap->insert( 1, 2 );\ntestForException( $heap );\n?>")).toMatchSnapshot();
  });
});
