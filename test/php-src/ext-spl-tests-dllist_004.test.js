// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_004.phpt
  it("SPL: DoublyLinkedList: Stacks", function () {
    expect(parser.parseCode("<?php\n$stack = new SplStack();\n// errors\ntry {\n    $stack->pop();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    $stack->shift();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n// data consistency\n$a = 2;\n$stack->push($a);\necho $stack->pop().\"\\n\";\n// peakable\n$stack->push(1);\n$stack->push(2);\necho $stack->top().\"\\n\";\n// iterable\nforeach ($stack as $elem) {\n    echo \"[$elem]\\n\";\n}\n// countable\n$stack->push(NULL);\n$stack->push(NULL);\necho count($stack).\"\\n\";\necho $stack->count().\"\\n\";\nvar_dump($stack->pop());\nvar_dump($stack->pop());\n// clonable\n$stack->push(2);\n$stack_clone = clone $stack;\n$stack_clone->pop();\necho count($stack).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
