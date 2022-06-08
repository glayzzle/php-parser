// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_025.phpt
  it("SPL: RecursiveIteratorIterator and begin/endIteration()", function () {
    expect(parser.parseCode("<?php\nclass MyRecursiveIteratorIterator extends RecursiveIteratorIterator\n{\n    function beginIteration(): void\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n    function endIteration(): void\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\n$ar = array(1, 2, array(31, 32, array(331)), 4);\n$it = new MyRecursiveIteratorIterator(new ArrayObject($ar, 0, \"RecursiveArrayIterator\"));\nforeach($it as $v) echo \"$v\\n\";\necho \"===MORE===\\n\";\nforeach($it as $v) echo \"$v\\n\";\necho \"===MORE===\\n\";\n$it->rewind();\nforeach($it as $v) echo \"$v\\n\";\nvar_dump($it->valid());\necho \"===MANUAL===\\n\";\n$it->rewind();\nwhile($it->valid())\n{\n    echo $it->current() . \"\\n\";\n    $it->next();\n    break;\n}\n$it->rewind();\nwhile($it->valid())\n{\n    echo $it->current() . \"\\n\";\n    $it->next();\n}\n?>")).toMatchSnapshot();
  });
});
