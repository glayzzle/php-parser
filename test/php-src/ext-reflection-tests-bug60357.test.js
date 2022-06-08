// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug60357.phpt
  it("Bug #60357 (__toString() method triggers E_NOTICE \"Array to string conversion\")", function () {
    expect(parser.parseCode("<?php\nfunction foo(\n    array $x = array('a', 'b'),\n    array $y = ['x' => 'y'],\n    array $z = [0 => 0, 2 => -2],\n    array $a = [[], [1], [2, 3]],\n) {}\necho new ReflectionFunction('foo'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
