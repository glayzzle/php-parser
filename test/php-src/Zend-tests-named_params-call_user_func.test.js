// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/call_user_func.phpt
  it("call_user_func() and friends with named parameters", function () {
    expect(parser.parseCode("<?php\n$test = function($a = 'a', $b = 'b', $c = 'c') {\n    echo \"a = $a, b = $b, c = $c\\n\";\n};\n$test_variadic = function(...$args) {\n    var_dump($args);\n};\n$test_ref = function(&$ref) {\n    $ref++;\n};\n$test_required = function($a, $b) {\n    echo \"a = $a, b = $b\\n\";\n};\nclass Test {\n    public function __construct($a = 'a', $b = 'b', $c = 'c') {\n        if (func_num_args() != 0) {\n            echo \"a = $a, b = $b, c = $c\\n\";\n        }\n    }\n    public function method($a = 'a', $b = 'b', $c = 'c') {\n        echo \"a = $a, b = $b, c = $c\\n\";\n    }\n}\ncall_user_func($test, 'A', c: 'C');\ncall_user_func($test, c: 'C', a: 'A');\ncall_user_func($test, c: 'C');\ncall_user_func($test_variadic, 'A', c: 'C');\ncall_user_func($test_ref, ref: null);\nvar_dump(call_user_func('call_user_func', $test, c: 'D'));\ntry {\n    call_user_func($test_required, b: 'B');\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(call_user_func('array_slice', [1, 2, 3, 4, 5], length: 2));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(call_user_func('array_slice', [1, 2, 3, 4, 'x' => 5], 3, preserve_keys: true));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n\";\n$test->__invoke('A', c: 'C');\n$test_variadic->__invoke('A', c: 'C');\n$test->call(new class {}, 'A', c: 'C');\n$test_variadic->call(new class {}, 'A', c: 'C');\necho \"\\n\";\n$rf = new ReflectionFunction($test);\n$rf->invoke('A', c: 'C');\n$rf->invokeArgs(['A', 'c' => 'C']);\n$rm = new ReflectionMethod(Test::class, 'method');\n$rm->invoke(new Test, 'A', c: 'C');\n$rm->invokeArgs(new Test, ['A', 'c' => 'C']);\n$rc = new ReflectionClass(Test::class);\n$rc->newInstance('A', c: 'C');\n$rc->newInstanceArgs(['A', 'c' => 'C']);\n?>")).toMatchSnapshot();
  });
});
