// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug39576.phpt
  it("Bug #39576 (array_walk() doesn't separate userdata zval)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $_table = '';\n    public $_columns = array ();\n    public $_primary = array ();\n}\n$test = new Test ();\n$test->name = 'test';\n$test->_columns['name'] = new stdClass;\nfunction test ($value, $column, &$columns) {}\narray_walk (\n    get_object_vars ($test),\n    'test',\n    $test->_columns\n);\nvar_dump($test);\narray_intersect_key (\n    get_object_vars ($test),\n    $test->_primary\n);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
