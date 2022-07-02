// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/001.phpt
  it("func_num_args() tests", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n    var_dump(func_num_args());\n}\nfunction test2($a) {\n    var_dump(func_num_args());\n}\nfunction test3($a, $b) {\n    var_dump(func_num_args());\n}\ntest1();\ntest2(1);\ntry {\n    test2();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntest3(1,2);\ncall_user_func(\"test1\");\ntry {\n    call_user_func(\"test3\", 1);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ncall_user_func(\"test3\", 1, 2);\nclass test {\n    static function test1($a) {\n        var_dump(func_num_args());\n    }\n}\ntest::test1(1);\ntry {\n    func_num_args();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
