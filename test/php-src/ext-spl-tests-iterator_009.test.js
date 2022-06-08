// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_009.phpt
  it("SPL: EmptyIterator", function () {
    expect(parser.parseCode("<?php\nclass EmptyIteratorEx extends EmptyIterator\n{\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n    function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::valid();\n    }\n    function current(): never\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::current();\n    }\n    function key(): never\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::key();\n    }\n    function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::next();\n    }\n}\nforeach (new EmptyIteratorEx() as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
