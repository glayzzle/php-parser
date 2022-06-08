// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/call_user_func_array.phpt
  it("Behavior of call_user_func_array() with named parameters", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    $test = function($a = 'a', $b = 'b', $c = 'c') {\n        echo \"a = $a, b = $b, c = $c\\n\";\n    };\n    $test_variadic = function(...$args) {\n        var_dump($args);\n    };\n    call_user_func_array($test, ['A', 'B']);\n    call_user_func_array($test, [1 => 'A', 0 => 'B']);\n    call_user_func_array($test, ['A', 'c' => 'C']);\n    call_user_func_array($test_variadic, ['A', 'c' => 'C']);\n    try {\n        call_user_func_array($test, ['d' => 'D']);\n    } catch (\\Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        call_user_func_array($test, ['c' => 'C', 'A']);\n    } catch (\\Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    echo \"\\n\";\n}\nnamespace Foo {\n    call_user_func_array($test, ['A', 'B']);\n    call_user_func_array($test, [1 => 'A', 0 => 'B']);\n    call_user_func_array($test, ['A', 'c' => 'C']);\n    call_user_func_array($test_variadic, ['A', 'c' => 'C']);\n    try {\n        call_user_func_array($test, ['d' => 'D']);\n    } catch (\\Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        call_user_func_array($test, ['c' => 'C', 'A']);\n    } catch (\\Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
