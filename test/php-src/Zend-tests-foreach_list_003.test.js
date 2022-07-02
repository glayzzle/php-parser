// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_list_003.phpt
  it("foreach with list key", function () {
    expect(parser.parseCode("<?php\n$array = [['a', 'b'], 'c', 'd'];\nforeach($array as list($key) => list(list(), $a)) {\n}\n?>")).toMatchSnapshot();
  });
});
