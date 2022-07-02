// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_006.phpt
  it("Dynamic calls to scope introspection functions are forbidden (function variations)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        $func = 'extract';\n        $func(['a' => 'b']);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func = 'compact';\n        $func(['a']);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func = 'get_defined_vars';\n        $func();\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func = 'func_get_args';\n        $func();\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func = 'func_get_arg';\n        $func(1);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $func = 'func_num_args';\n        $func();\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
