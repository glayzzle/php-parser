// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_evaluation_order.phpt
  it("list() with keys, evaluation order", function () {
    expect(parser.parseCode("<?php\nrequire_once \"list_keyed_evaluation_order.inc\";\n$a = new StringCapable(\"A\");\n$c = new StringCapable(\"C\");\n$e = new IndexableRetrievable(\"E\", new Indexable([\"A\" => \"value for offset A\", \"C\" => \"value for offset C\"]));\n$store = new Indexable([]);\n// list($a => $b, $c => $d) = $e;\n// Should be evaluated in the order:\n// 1. Evaluate $e\n// 2. Evaluate $a\n// 3. Evaluate $e[$a]\n// 4. Assign $b from $e[$a]\n// 5. Evaluate $c\n// 6. Evaluate $e[$c]\n// 7. Assign $c from $e[$a]\nlist((string)$a => $store[\"B\"], (string)$c => $store[\"D\"]) = $e->getIndexable();\n?>")).toMatchSnapshot();
  });
});
