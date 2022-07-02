// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69371.phpt
  it("Bug #69371 (Hash table collision leads to inaccessible array keys)", function () {
    expect(parser.parseCode("<?php\n$array = array(\n    \"d6_node_type\" => 1,\n    \"d6_filter_format\" => 2,\n    \"d6_user\" => 3,\n    \"d6_field_instance_widget_settings\" => 4,\n    \"d6_field_formatter_settings\" => 5,\n);\n$weights = array(\n    5, 1, 3, 2, 0\n);\narray_multisort($weights, SORT_DESC, SORT_NUMERIC, $array);\nvar_dump($array[\"d6_node_type\"]);\n?>")).toMatchSnapshot();
  });
});
