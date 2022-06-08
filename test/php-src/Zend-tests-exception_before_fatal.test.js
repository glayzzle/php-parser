// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_before_fatal.phpt
  it("Exceptions before fatal error", function () {
    expect(parser.parseCode("<?php\nfunction exception_error_handler($code, $msg) {\n    throw new Exception($msg);\n}\nset_error_handler(\"exception_error_handler\");\ntry {\n    $foo->a();\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    new $foo();\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    throw $foo;\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    $foo();\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    $foo::b();\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    $b = clone $foo;\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\nclass b {\n}\ntry {\n    b::$foo();\n} catch(Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
