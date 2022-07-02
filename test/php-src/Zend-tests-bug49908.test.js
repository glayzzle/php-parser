// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug49908.phpt
  it("Bug #49908 (throwing exception in autoloader crashes when interface is not defined)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($className) {\n    var_dump($className);\n    if ($className == 'Foo') {\n        class Foo implements Bar {};\n    } else {\n        throw new Exception($className);\n    }\n});\ntry {\n    new Foo();\n} catch (Exception $e) { }\n// We never reach here.\nvar_dump(new Foo());\n?>")).toMatchSnapshot();
  });
});
