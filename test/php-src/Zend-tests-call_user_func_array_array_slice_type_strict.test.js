// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_array_array_slice_type_strict.phpt
  it("Type check in call_user_func_array() + array_slice() optimization (strict types)", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$array = [1, 2, 3];\ntry {\n    $len = [];\n    call_user_func_array('var_dump', array_slice($array, 0, $len));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $len = 2.0;\n    call_user_func_array('var_dump', array_slice($array, 0, $len));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$len = null;\ncall_user_func_array('var_dump', array_slice($array, 1, $len));\n?>")).toMatchSnapshot();
  });
});
