// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77345_gc_2.phpt
  it("Bug #77345 (Segmentation faults stack overflow in cyclic garbage collector) (Bug #77427)", function () {
    expect(parser.parseCode("<?php\nclass Node\n{\n    /** @var Node */\n    public $previous;\n    /** @var Node */\n    public $next;\n}\nvar_dump(gc_enabled());\nvar_dump('start');\nfunction xxx() {\n    $firstNode = new Node();\n    $firstNode->previous = $firstNode;\n    $firstNode->next = $firstNode;\n    $circularDoublyLinkedList = $firstNode;\n    for ($i = 0; $i < 300000; $i++) {\n        $currentNode = $circularDoublyLinkedList;\n        $nextNode = $circularDoublyLinkedList->next;\n        $newNode = new Node();\n        $newNode->previous = $currentNode;\n        $currentNode->next = $newNode;\n        $newNode->next = $nextNode;\n        $nextNode->previous = $newNode;\n        $circularDoublyLinkedList = $nextNode;\n    }\n}\nxxx();\ngc_collect_cycles();\nvar_dump('end');\n?>")).toMatchSnapshot();
  });
});
