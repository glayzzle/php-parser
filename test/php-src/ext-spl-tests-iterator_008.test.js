// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_008.phpt
  it("SPL: InfiniteIterator", function () {
    expect(parser.parseCode("<?php\nclass ArrayIteratorEx extends ArrayIterator\n{\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n    function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::valid();\n    }\n    function current(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::current();\n    }\n    function key(): string|int|null\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::key();\n    }\n    function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::next();\n    }\n}\n$it = new InfiniteIterator(new ArrayIteratorEx(range(0,2)));\n$pos =0;\nforeach ($it as $v) {\n    var_dump($v);\n    if ($pos++ > 5) {\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
