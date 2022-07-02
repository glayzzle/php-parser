// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/argument_count_incorrect_userland.phpt
  it("Call userland function with incorrect number of arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    function foo($bar) { }\n    foo();\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    function bar($foo, $bar) { }\n    bar(1);\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\nfunction bat(int $foo, string $bar) { }\ntry {\n    bat(123);\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bat(\"123\");\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
