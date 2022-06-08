// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_pq_top_basic.phpt
  it("SPL: SplPriorityQueue: top and extract flags", function () {
    expect(parser.parseCode("<?php\n$priorityQueue = new SplPriorityQueue();\nvar_dump($priorityQueue->getExtractFlags());\n$priorityQueue->insert(\"a\", 1);\n$priorityQueue->insert(\"b\", 2);\n$priorityQueue->insert(\"c\", 0);\necho \"EXTR DEFAULT\",PHP_EOL;\necho \"value: \",$priorityQueue->top(),PHP_EOL;\n$priorityQueue->setExtractFlags(SplPriorityQueue::EXTR_PRIORITY);\nvar_dump($priorityQueue->getExtractFlags() & SplPriorityQueue::EXTR_PRIORITY);\necho \"EXTR_PRIORITY\",PHP_EOL;\necho \"priority: \",$priorityQueue->top(),PHP_EOL;\n$priorityQueue->setExtractFlags(SplPriorityQueue::EXTR_BOTH);\necho \"EXTR_BOTH\",PHP_EOL;\nprint_r($priorityQueue->top());\necho \"EXTR_DATA\",PHP_EOL;\n$priorityQueue->setExtractFlags(SplPriorityQueue::EXTR_DATA);\necho \"value: \",$priorityQueue->top(),PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
