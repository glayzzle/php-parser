// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52939.phpt
  it("Bug #52939 (zend_call_function_array does not respect ZEND_SEND_PREFER_REF)", function () {
    expect(parser.parseCode("<?php\n$ar1 = array(\"row1\" => 2, \"row2\" => 1);\nvar_dump(array_multisort($ar1));\nvar_dump($ar1);\n$ar1 = array(\"row1\" => 2, \"row2\" => 1);\n$args = array(&$ar1);\nvar_dump(call_user_func_array(\"array_multisort\", $args));\nvar_dump($ar1);\n$ar1 = array(\"row1\" => 2, \"row2\" => 1);\n$args = array($ar1);\nvar_dump(call_user_func_array(\"array_multisort\", $args));\nvar_dump($ar1);\n?>")).toMatchSnapshot();
  });
});
