// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/054.phpt
  it("filter_var_array() - using the add_empty option", function () {
    expect(parser.parseCode("<?php\n$data = array('foo' => 123);\nvar_dump(\n    filter_var_array($data, array('foo' => array('filter' => FILTER_DEFAULT), 'bar' => array('filter' => FILTER_DEFAULT)), false),\n    filter_var_array($data, array('foo' => array('filter' => FILTER_DEFAULT), 'bar' => array('filter' => FILTER_DEFAULT)))\n);\n?>")).toMatchSnapshot();
  });
});
