// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_keys.phpt
  it("basic array_fill_keys test", function () {
    expect(parser.parseCode("<?php\n    var_dump(array_fill_keys(array(), 1));\n    var_dump(array_fill_keys(array('foo', 'bar'), NULL));\n    var_dump(array_fill_keys(array('5', 'foo', 10, 1.23), 123));\n    var_dump(array_fill_keys(array('test', TRUE, 10, 100), ''));\n?>")).toMatchSnapshot();
  });
});
