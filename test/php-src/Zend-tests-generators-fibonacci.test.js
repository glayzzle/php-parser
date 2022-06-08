// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/fibonacci.phpt
  it("Creating an infinite fibonacci list using a generator", function () {
    expect(parser.parseCode("<?php\nfunction fib() {\n    list($a, $b) = [1, 1];\n    while (true) {\n        yield $b;\n        list($a, $b) = [$b, $a + $b];\n    }\n}\nforeach (fib() as $n) {\n    if ($n > 1000) break;\n    var_dump($n);\n}\n?>")).toMatchSnapshot();
  });
});
