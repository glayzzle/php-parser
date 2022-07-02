// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72767.phpt
  it("Bug #72767: PHP Segfaults when trying to expand an infinite operator", function () {
    expect(parser.parseCode("<?php\nfunction test() {}\n$iterator = new LimitIterator(\n    new InfiniteIterator(new ArrayIterator([42])),\n    0, 17000\n);\ntest(...$iterator);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
