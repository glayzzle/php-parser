// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_068.phpt
  it("SPL: Iterator: Overloaded object and destruction", function () {
    expect(parser.parseCode("<?php\nclass Test implements Iterator {\n    function foo() {\n        echo __METHOD__ . \"()\\n\";\n    }\n    function rewind(): void {}\n    function valid(): bool {}\n    function current(): mixed {}\n    function key(): mixed {}\n    function next(): void {}\n}\nclass TestIteratorIterator extends IteratorIterator {\n    function __destruct() {\n        echo __METHOD__ . \"()\\n\";\n        $this->foo();\n    }\n}\n$obj = new TestIteratorIterator(new Test);\n$obj->foo();\nunset($obj);\n?>")).toMatchSnapshot();
  });
});
