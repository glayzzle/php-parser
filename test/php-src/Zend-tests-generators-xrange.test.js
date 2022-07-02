// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/xrange.phpt
  it("Simple generator xrange() test", function () {
    expect(parser.parseCode("<?php\nfunction xrange($start, $end, $step = 1) {\n    for ($i = $start; $i <= $end; $i += $step) {\n        yield $i;\n    }\n}\nforeach (xrange(10, 20, 2) as $i) {\n    var_dump($i);\n}\n?>")).toMatchSnapshot();
  });
});
