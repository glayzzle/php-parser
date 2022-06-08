// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_001.phpt
  it("SPL: DoublyLinkedList: std operations", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n// errors\ntry {\n    $dll->pop();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    $dll->shift();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n// data consistency\n$a = 2;\n$dll->push($a);\necho $dll->pop().\"\\n\";\n$a = 2;\n$dll->unshift($a);\necho $dll->shift().\"\\n\";\n// peakable\n$dll->push(1);\n$dll->push(2);\necho $dll->top().\"\\n\";\necho $dll->bottom().\"\\n\";\n$dll->pop();\n$dll->pop();\n// countable\n$dll->push(NULL);\n$dll->push(NULL);\necho count($dll).\"\\n\";\necho $dll->count().\"\\n\";\nvar_dump($dll->pop());\nvar_dump($dll->pop());\n// clonable\n$dll->push(2);\n$dll_clone = clone $dll;\n$dll_clone->pop();\necho count($dll).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
