// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_valid_exception.phpt
  it("Exception from valid() during yield from", function () {
    expect(parser.parseCode("<?php\nclass FooBar implements Iterator {\n    function rewind(): void {}\n    function current(): mixed {}\n    function key(): mixed {}\n    function next(): void {}\n    function valid(): bool {\n        throw new Exception(\"Exception from valid()\");\n    }\n}\nfunction gen() {\n    try {\n        // the fact that the yield from result is used is relevant.\n        var_dump(yield from new FooBar);\n    } catch (Exception $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$x = gen();\n$x->current();\n?>")).toMatchSnapshot();
  });
});
