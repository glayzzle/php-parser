// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_heap_isempty.phpt
  it("SPL: Test of isEmpty for SPL Max Heap", function () {
    expect(parser.parseCode("<?php\n  $h = new SplMaxHeap();\n  echo \"Checking a new heap is empty: \";\n  var_dump($h->isEmpty()).\"\\n\";\n  $h->insert(2);\n  echo \"Checking after insert: \";\n  var_dump($h->isEmpty()).\"\\n\";\n  $h->extract();\n  echo \"Checking after extract: \";\n  var_dump($h->isEmpty()).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
