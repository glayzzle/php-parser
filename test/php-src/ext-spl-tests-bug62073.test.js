// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62073.phpt
  it("Bug #62073 (different ways of iterating over an SplMaxHeap result in different keys)", function () {
    expect(parser.parseCode("<?php\n$heap = new SplMaxHeap();\n$heap->insert(42);\nforeach ($heap as $key => $value) {\n    var_dump($key);\n    var_dump($value);\n    break;\n}\n$heap = new SplMaxHeap();\n$heap->insert(42);\nvar_dump($heap->key());\nvar_dump($heap->current());\n?>")).toMatchSnapshot();
  });
});
