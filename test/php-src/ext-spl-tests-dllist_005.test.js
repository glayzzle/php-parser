// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_005.phpt
  it("SPL: DoublyLinkedList: Queues", function () {
    expect(parser.parseCode("<?php\n$queue = new SplQueue();\n// errors\ntry {\n    $queue->dequeue();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    $queue->shift();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n// data consistency\n$a = 2;\n$queue->enqueue($a);\necho $queue->dequeue().\"\\n\";\n// peakable\n$queue->enqueue(1);\n$queue->enqueue(2);\necho $queue->top().\"\\n\";\n// iterable\nforeach ($queue as $elem) {\n    echo \"[$elem]\\n\";\n}\n// countable\n$queue->enqueue(NULL);\n$queue->enqueue(NULL);\necho count($queue).\"\\n\";\necho $queue->count().\"\\n\";\nvar_dump($queue->dequeue());\nvar_dump($queue->dequeue());\n// clonable\n$queue->enqueue(2);\n$queue_clone = clone $queue;\n$queue_clone->dequeue();\necho count($queue).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
