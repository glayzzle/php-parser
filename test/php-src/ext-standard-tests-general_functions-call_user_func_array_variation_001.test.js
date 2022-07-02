// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/call_user_func_array_variation_001.phpt
  it("call_user_func_array() passes by reference if the array element is referenced, regardless of function signature.", function () {
    expect(parser.parseCode("<?php\nfunction by_val($arg) {\n    $arg = 'changed';\n}\nfunction by_ref(&$arg) {\n    $arg = 'changed';\n}\necho \"------ Calling by_val() with unreferenced argument ------\\n\";\n$arg = array('original');\ncall_user_func_array('by_val', $arg);\nvar_dump($arg);\necho \"------ Calling by_ref() with unreferenced argument ------\\n\";\n$arg = array('original');\ncall_user_func_array('by_ref', $arg);\nvar_dump($arg);\necho \"------ Calling by_val() with referenced argument ------\\n\";\n$arg = array('original');\n$ref = &$arg[0];\ncall_user_func_array('by_val', $arg);\nvar_dump($arg);\necho \"------ Calling by_ref() with referenced argument ------\\n\";\n$arg = array('original');\n$ref = &$arg[0];\ncall_user_func_array('by_ref', $arg);\nvar_dump($arg);\n?>")).toMatchSnapshot();
  });
});
