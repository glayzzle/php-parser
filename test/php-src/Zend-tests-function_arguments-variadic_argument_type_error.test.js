// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/variadic_argument_type_error.phpt
  it("Call userland function with incorrect variadic argument type", function () {
    expect(parser.parseCode("<?php\nfunction foo($foo, int ...$bar) {}\ntry {\n    foo(1, []);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    foo(1, 1, 1, []);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
