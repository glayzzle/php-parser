// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_variation_002.phpt
  it("get_object_vars() - ensure references are preserved", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\nvar_dump(get_object_vars($obj));\n$a='original.a';\n$obj->ref = &$a;\n$obj->val = $a;\n$arr = get_object_vars($obj);\nvar_dump($arr);\n$arr['ref'] = 'changed.ref';\n$arr['val'] = 'changed.val';\nvar_dump($arr, $obj, $a);\n?>")).toMatchSnapshot();
  });
});
