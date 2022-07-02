// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug42850.phpt
  it("Bug #42850 (array_walk_recursive() leaves references)", function () {
    expect(parser.parseCode("<?php\n// Bug #42850\n$data = array ('key1' => 'val1', array('key2' => 'val2'));\nfunction apply_dumb($item, $key) {};\nvar_dump($data);\narray_walk_recursive($data, 'apply_dumb');\n$data2 = $data;\n$data2[0] = 'altered';\nvar_dump($data);\nvar_dump($data2);\n// Bug #34982\nfunction myfunc($data) {\n    array_walk_recursive($data, 'apply_changed');\n}\nfunction apply_changed(&$input, $key) {\n    $input = 'changed';\n}\nmyfunc($data);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
