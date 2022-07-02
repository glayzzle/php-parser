// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_array_prefer_ref.phpt
  it("call_user_func_array() passes value to prefer-ref arg if element wasn't a reference", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    call_user_func_array('array_multisort', [[3, 2, 1]]);\n    $args = [[3, 2, 1]];\n    call_user_func_array('array_multisort', $args);\n    var_dump($args);\n    unset($args);\n    $array = [3, 2, 1];\n    call_user_func('array_multisort', $array);\n    var_dump($array);\n    unset($array);\n}\nnamespace Foo {\n    call_user_func_array('array_multisort', [[3, 2, 1]]);\n    $args = [[3, 2, 1]];\n    call_user_func_array('array_multisort', $args);\n    var_dump($args);\n    unset($args);\n    $array = [3, 2, 1];\n    call_user_func('array_multisort', $array);\n    var_dump($array);\n    unset($array);\n}\n?>")).toMatchSnapshot();
  });
});
