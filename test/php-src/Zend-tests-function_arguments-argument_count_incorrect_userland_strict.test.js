// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/argument_count_incorrect_userland_strict.phpt
  it("Call userland function with incorrect number of arguments with strict types", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\ntry {\n    function foo($bar) { }\n    foo();\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    function bar($foo, $bar) { }\n    bar(1);\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\nfunction bat(int $foo, string $bar) { }\ntry {\n    bat(123);\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bat(\"123\");\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bat(123, 456);\n} catch (\\Error $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
