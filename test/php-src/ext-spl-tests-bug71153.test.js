// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71153.phpt
  it("Bug #71153: Performance Degradation in ArrayIterator with large arrays", function () {
    expect(parser.parseCode("<?php\n$n = 200000;\nfor ($i = 0; $i < $n; ++$i) {\n    foreach (new ArrayIterator([]) as $v) {}\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
