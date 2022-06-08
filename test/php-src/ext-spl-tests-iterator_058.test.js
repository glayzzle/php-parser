// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_058.phpt
  it("SPL: Iterator::__construct(void)", function () {
    expect(parser.parseCode("<?php\nclass myIterator implements Iterator {\n    function current(): mixed {}\n    function next(): void {}\n    function key(): mixed {}\n    function valid(): bool {}\n    function rewind(): void {}\n}\ntry {\n    $it = new myIterator();\n} catch (InvalidArgumentException $e) {\n    echo 'InvalidArgumentException thrown';\n}\necho 'no Exception thrown';\n?>")).toMatchSnapshot();
  });
});
