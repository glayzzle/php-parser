// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_list_004.phpt
  it("foreach with empty list", function () {
    expect(parser.parseCode("<?php\n$array = [['a', 'b'], 'c', 'd'];\nforeach($array as $key => list()) {\n}\n?>")).toMatchSnapshot();
  });
});
