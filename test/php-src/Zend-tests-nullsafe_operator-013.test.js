// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/013.phpt
  it("Test nullsafe property in special functions", function () {
    expect(parser.parseCode("<?php\nfunction dump_error(callable $callable) {\n    try {\n        var_dump($callable());\n    } catch (Throwable $e) {\n        var_dump($e->getMessage());\n    }\n}\nfunction foo() {}\n$foo = null;\ndump_error(fn() => strlen($foo?->foo()));\ndump_error(fn() => is_null($foo?->foo()));\ndump_error(fn() => is_bool($foo?->foo()));\ndump_error(fn() => is_int($foo?->foo()));\ndump_error(fn() => is_scalar($foo?->foo()));\ndump_error(fn() => boolval($foo?->foo()));\ndump_error(fn() => defined($foo?->foo()));\ndump_error(fn() => chr($foo?->foo()));\ndump_error(fn() => ord($foo?->foo()));\ndump_error(fn() => call_user_func_array($foo?->foo(), []));\ndump_error(fn() => call_user_func_array('foo', $foo?->foo()));\ndump_error(fn() => get_class($foo?->foo()));\ndump_error(fn() => get_called_class($foo?->foo()));\ndump_error(fn() => gettype($foo?->foo()));\ndump_error(fn() => func_num_args($foo?->foo()));\ndump_error(fn() => func_get_args($foo?->foo()));\ndump_error(fn() => array_slice($foo?->foo(), 0));\ndump_error(fn() => array_slice(['foo'], $foo?->foo()));\ndump_error(fn() => array_slice(['foo'], 0, $foo?->foo()));\ndump_error(fn() => array_key_exists($foo?->foo(), []));\ndump_error(fn() => array_key_exists('foo', $foo?->foo()));\n?>")).toMatchSnapshot();
  });
});
