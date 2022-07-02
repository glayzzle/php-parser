// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug49269.phpt
  it("Bug #49269 (Ternary operator fails on Iterator object when used inside foreach declaration).", function () {
    expect(parser.parseCode("<?php\nclass TestObject implements Iterator\n{\n    public $n = 0;\n    function valid(): bool\n    {\n        return ($this->n < 3);\n    }\n    function current(): mixed {return $this->n;}\n    function next(): void {$this->n++;}\n    function key(): mixed { }\n    function rewind(): void {$this->n = 0;}\n}\n$array_object = new TestObject();\nforeach ((true ? $array_object : $array_object) as $item) echo \"$item\\n\";\n?>")).toMatchSnapshot();
  });
});
