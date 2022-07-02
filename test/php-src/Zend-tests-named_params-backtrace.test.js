// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/backtrace.phpt
  it("Extra named params in backtraces", function () {
    expect(parser.parseCode("<?php\nfunction test($a, ...$rest) {\n    var_dump(debug_backtrace());\n    debug_print_backtrace();\n    throw new Exception(\"Test\");\n}\ntry {\n    test(1, 2, x: 3, y: 4);\n} catch (Exception $e) {\n    var_dump($e->getTrace());\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
