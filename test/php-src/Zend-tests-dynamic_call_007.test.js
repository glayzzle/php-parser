// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_007.phpt
  it("Dynamic calls to scope introspection functions are forbidden (misoptimization)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $i = 1;\n    try {\n        array_map('extract', [['i' => new stdClass]]);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    $i += 1;\n    var_dump($i);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
