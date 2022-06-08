// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_evaluation_order_nested.phpt
  it("list() with keys, evaluation order: nested", function () {
    expect(parser.parseCode("<?php\nrequire_once \"list_keyed_evaluation_order.inc\";\n$a = new StringCapable(\"A\");\n$c = new StringCapable(\"C\");\n$f = new StringCapable(\"F\");\n$g = new StringCapable(\"G\");\n$i = new StringCapable(\"I\");\n$k = new IndexableRetrievable(\"K\", new Indexable([\n    \"A\" => \"offset value for A\",\n    \"C\" => new Indexable([\n        0 => \"offset value for 0\",\n        1 => \"offset value for 1\"\n    ]),\n    \"F\" => new Indexable([\n        \"G\" => \"offset value for G\",\n        \"I\" => \"offset value for I\"\n    ])\n]));\n$store = new Indexable([]);\n// list($a => $b, $c => list($d, $e), $f => list($g => $h, $i => $j)) = $k;\n// Should be evaluated in the order:\n// 1. Evaluate $k\n// 2. Evaluate $a\n// 3. Evaluate $k[$a]\n// 4. Assign $b from $k[$a]\n// 5. Evaluate $c\n// 6. Evaluate $k[$c]\n// 7. Evaluate $k[$c][0]\n// 8. Assign $d from $k[$c][0]\n// 9. Evaluate $k[$c][1]\n// 10. Assign $e from $k[$c][1]\n// 11. Evaluate $f\n// 12. Evaluate $k[$f]\n// 13. Evaluate $g\n// 14. Evaluate $k[$f][$g]\n// 15. Assign $h from $k[$f][$g]\n// 16. Evaluate $i\n// 17. Evaluate $k[$f][$i]\n// 18. Assign $j from $k[$f][$i]\nlist(\n    (string)$a => $store[\"B\"],\n    (string)$c => list($store[\"D\"], $store[\"E\"]),\n    (string)$f => list(\n        (string)$g => $store[\"H\"],\n        (string)$i => $store[\"J\"]\n    )\n) = $k->getIndexable();\n?>")).toMatchSnapshot();
  });
});
