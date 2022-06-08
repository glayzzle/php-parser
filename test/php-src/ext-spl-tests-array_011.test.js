// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_011.phpt
  it("SPL: ArrayIterator, LimitIterator and string keys", function () {
    expect(parser.parseCode("<?php\n$a = array('zero' => 0, 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4, 'five' => 5);\n//foreach (new ArrayIterator($a) as $k => $v)\nforeach (new LimitIterator(new ArrayIterator($a), 1, 3) as $k => $v)\n{\n    var_dump(array($k, $v));\n}\n?>")).toMatchSnapshot();
  });
});
