// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_002.phpt
  it("SPL: DoublyLinkedList: iterators", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->push(2);\n$dll->push(3);\n$dll->push(4);\n$dll2 = clone $dll;\n// std iterator\nforeach($dll as $k=>$v) {\n    echo \"$k=>$v\\n\";\n    // inner iterator\n    foreach($dll as $k2=>$v2) {\n        echo \"->$k2=>$v2\\n\";\n    }\n}\necho \"# deleted\\n\";\nforeach($dll as $k=>$v) {\n    echo \"$k=>$v\\n\";\n    unset($dll);\n}\necho \"# while popping\\n\";\nforeach($dll2 as $k=>$v) {\n    echo \"$k=>$v\\n\";\n    echo \"popped \".$dll2->pop().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
