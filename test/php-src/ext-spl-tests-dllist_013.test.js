// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_013.phpt
  it("SPL: DoublyLinkedList: insert operations", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n// errors\ntry {\n    $dll->add(2,5);\n} catch (OutOfRangeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n$dll->add(0,6);\t\t\t\t\t\t//\t6\n$dll->add(0,3);\t\t\t\t\t\t//\t3 6\n// Insert in the middle of the DLL\n$dll->add(1,4);\t\t\t\t\t\t//\t3 4 6\n$dll->add(2,5);\t\t\t\t\t\t//\t3 4 5 6\n$dll->unshift(2);\t\t\t\t\t//\t2 3 5 4 6\n// Insert at the beginning and end of the DLL\n$dll->add(0,1);\t\t\t\t\t\t//\t1 2 3 4 5 6\n$dll->add(6,7);\t\t\t\t\t\t//\t1 2 3 4 5 6 7\necho count($dll).\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\necho $dll->pop().\"\\n\";\n// Test refcounted value\n$str = \"foo\";\n$str .= \"bar\";\n$dll->add(0, $str);\n$dll->add(0, $str);\nvar_dump($dll->shift());\nvar_dump($dll->shift());\n?>")).toMatchSnapshot();
  });
});
