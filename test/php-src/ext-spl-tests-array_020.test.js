// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_020.phpt
  it("SPL: ArrayIterator overloading", function () {
    expect(parser.parseCode("<?php\nclass ArrayIteratorEx extends ArrayIterator\n{\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        ArrayIterator::rewind();\n    }\n    function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return ArrayIterator::valid();\n    }\n    function key(): string|int|null\n    {\n        echo __METHOD__ . \"\\n\";\n        return ArrayIterator::key();\n    }\n    function current(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return ArrayIterator::current();\n    }\n    function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        ArrayIterator::next();\n    }\n}\n$ar = new ArrayIteratorEx(array(1,2));\nforeach($ar as $k => $v)\n{\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
