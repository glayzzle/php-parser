// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_007.phpt
  it("SPL: SplHeap: iteration through methods", function () {
    expect(parser.parseCode("<?php\n$h = new SplMaxHeap();\n$h->insert(1);\n$h->insert(5);\n$h->insert(0);\n$h->insert(4);\n$h->rewind();\necho \"count(\\$h) = \".count($h).\"\\n\";\necho \"\\$h->count() = \".$h->count().\"\\n\";\nwhile ($h->valid()) {\n    $k = $h->key();\n    $v = $h->current();\n    echo \"$k=>$v\\n\";\n    $h->next();\n}\n?>")).toMatchSnapshot();
  });
});
