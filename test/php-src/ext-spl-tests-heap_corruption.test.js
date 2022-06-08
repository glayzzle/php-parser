// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_corruption.phpt
  it("SPL: SplHeap - heap corruption via compare exception (with top element deletion)", function () {
    expect(parser.parseCode("<?php\nclass myHeap extends SplHeap\n{\n    public $allow_compare = true;\n    public function compare($v1, $v2): int\n    {\n        if ($this->allow_compare == true)\n        {\n            if ($v1 > $v2)\n            {\n                return 1;\n            }\n            else if ($v1 < $v2)\n            {\n                return -1;\n            }\n            else\n            {\n                return 0;\n            }\n        }\n        else\n        {\n            throw new Exception('Compare exception');\n        }\n    }\n}\n$heap = new myHeap();\n$heap->insert(1);\n$heap->insert(2);\n$heap->insert(3);\n$heap->insert(4);\n$heap->allow_compare = false;\nvar_dump($heap->isCorrupted());\ntry {\n    $heap->extract();\n}\ncatch (Exception $e) {\n    echo \"Compare Exception: \" . $e->getMessage() . PHP_EOL;\n}\ntry {\n    $heap->top();\n}\ncatch (Exception $e) {\n    echo \"Corruption Exception: \" . $e->getMessage() . PHP_EOL;\n}\nvar_dump($heap->isCorrupted());\n$heap->recoverFromCorruption();\nvar_dump($heap->isCorrupted());\n?>")).toMatchSnapshot();
  });
});
