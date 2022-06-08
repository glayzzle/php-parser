// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug74454.phpt
  it("Bug #74454 (Wrong exception being thrown when using ReflectionMethod)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register('load_file');\ntry {\n    $x = new ReflectionMethod('A', 'b');\n} catch (\\Throwable $e) {\n    echo get_class($e), ': ', $e->getMessage(), PHP_EOL;\n}\nfunction load_file() {\n    require __DIR__ . '/bug74454.inc';\n}\n?>")).toMatchSnapshot();
  });
});
