// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/call_user_func_return.phpt
  it("call_user_func() and return value", function () {
    expect(parser.parseCode("<?php\n$t1 = 'test1';\nfunction test1($arg1, $arg2)\n{\n    global $t1;\n    echo \"$arg1 $arg2\\n\";\n    return $t1;\n}\n$t2 = 'test2';\nfunction & test2($arg1, $arg2)\n{\n    global $t2;\n    echo \"$arg1 $arg2\\n\";\n    return $t2;\n}\nfunction test($func)\n{\n    var_dump($func('Direct', 'Call'));\n    var_dump(call_user_func_array($func, array('User', 'Func')));\n}\ntest('test1');\ntest('test2');\n?>")).toMatchSnapshot();
  });
});
