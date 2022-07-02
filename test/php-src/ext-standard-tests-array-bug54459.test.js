// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug54459.phpt
  it("Bug #54459 (Range function accuracy)", function () {
    expect(parser.parseCode("<?php\nforeach (range(90, 100, .1) as $i => $v){\n  echo $i, ' = ', $v, PHP_EOL;\n}\nforeach (range(\"90\", \"100\", .1) as $i => $v){\n  echo $i, ' = ', $v, PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
