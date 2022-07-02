// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_005.phpt
  it("Dynamic calls to scope introspection functions are forbidden", function () {
    expect(parser.parseCode("<?php\nfunction test_calls($func) {\n    $i = 1;\n    try {\n        array_map($func, [['i' => new stdClass]]);\n        var_dump($i);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func(['i' => new stdClass]);\n        var_dump($i);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        call_user_func($func, ['i' => new stdClass]);\n        var_dump($i);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\ntest_calls('extract');\n?>")).toMatchSnapshot();
  });
});
