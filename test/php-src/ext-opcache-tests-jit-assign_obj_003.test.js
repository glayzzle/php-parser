// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_003.phpt
  it("JIT ASSIGN_OBJ: Assign undefined vatiable to property", function () {
    expect(parser.parseCode("<?php\nclass Node {\n    public $previous;\n    public $next;\n}\nfunction xxx() {\n    $firstNode = new Node();\n//    $firstNode->previous = $firstNode;\n    $firstNode->next = $firstNode;\n    $circularDoublyLinkedList = null;\n    for ($i = 0; $i < 2; $i++) {\n        $currentNode = $circularDoublyLinkedList;\n        $nextNode = $circularDoublyLinkedList->next;\n        $newNode->next = $undef1->next; // <- ???\n        $newNode = new Node();\n        $currentNode->undef2 = new Node();\n        $circularDoublyLinkedList = $nextNode;\n    }\n}\ntry {\n\t@xxx();\n} catch (Throwable $e) {\n\techo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
