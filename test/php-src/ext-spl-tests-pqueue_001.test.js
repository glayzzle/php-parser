// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/pqueue_001.phpt
  it("SPL: SplPriorityQueue: std operations and extract flags", function () {
    expect(parser.parseCode("<?php\n$pq = new SplPriorityQueue();\n// errors\ntry {\n    $pq->extract();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n$pq->insert(\"a\", 1);\n$pq->insert(\"b\", 2);\n$pq->insert(\"c\", 0);\nforeach ($pq as $k=>$v) {\n    echo \"$k=>\".print_r($v, 1).\"\\n\";\n}\necho \"EXTR_BOTH\\n\";\n$pq1 = new SplPriorityQueue();\n$pq1->setExtractFlags(SplPriorityQueue::EXTR_BOTH);\n$pq1->insert(\"a\", 1);\n$pq1->insert(\"b\", 2);\n$pq1->insert(\"c\", 0);\nforeach ($pq1 as $k=>$v) {\n    echo \"$k=>\".print_r($v, 1).\"\\n\";\n}\necho \"EXTR_DATA\\n\";\n$pq2 = new SplPriorityQueue();\n$pq2->setExtractFlags(SplPriorityQueue::EXTR_DATA);\n$pq2->insert(\"a\", 1);\n$pq2->insert(\"b\", 2);\n$pq2->insert(\"c\", 0);\nforeach ($pq2 as $k=>$v) {\n    echo \"$k=>\".print_r($v, 1).\"\\n\";\n}\necho \"EXTR_PRIORITY\\n\";\n$pq3 = new SplPriorityQueue();\n$pq3->setExtractFlags(SplPriorityQueue::EXTR_PRIORITY);\n$pq3->insert(\"a\", 1);\n$pq3->insert(\"b\", 2);\n$pq3->insert(\"c\", 0);\nforeach ($pq3 as $k=>$v) {\n    echo \"$k=>\".print_r($v, 1).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
