// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/052.phpt
  it("filter_var() / filter_var_array() and passed data integrity", function () {
    expect(parser.parseCode("<?php\nfunction filter_cb($var)\n{\n  return 1;\n}\n$data = array ('bar' => array ('fu<script>bar', 'bar<script>fu') );\nvar_dump(filter_var($data, FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FORCE_ARRAY));\nvar_dump($data);\nvar_dump(filter_var($data, FILTER_CALLBACK, array('options' => 'filter_cb')));\nvar_dump($data);\nvar_dump(filter_var_array($data, array('bar' => array('filter' => FILTER_CALLBACK, 'options' => 'filter_cb'))));\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
