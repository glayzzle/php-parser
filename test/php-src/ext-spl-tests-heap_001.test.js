// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_001.phpt
  it("SPL: SplMaxHeap: std operations", function () {
    expect(parser.parseCode("<?php\n$h = new SplMaxHeap();\n// errors\ntry {\n    $h->extract();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n$h->insert(1);\n$h->insert(2);\n$h->insert(3);\n$h->insert(3);\n$h->insert(3);\necho $h->count().\"\\n\";\necho $h->extract().\"\\n\";\necho $h->extract().\"\\n\";\necho $h->extract().\"\\n\";\necho $h->extract().\"\\n\";\necho $h->extract().\"\\n\";\necho $h->count().\"\\n\";\necho \"--\\n\";\n$b = 4;\n$h->insert($b);\n$b = 5;\n$h2 = clone $h;\necho $h->extract().\"\\n\";\necho $h2->extract().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
