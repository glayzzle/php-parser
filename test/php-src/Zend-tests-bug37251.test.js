// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37251.phpt
  it("Bug #37251 (deadlock when custom error handler is to catch array type hint error)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function bar(array $foo) {\n    }\n}\ntry {\n    $foo = new Foo();\n    $foo->bar();\n} catch (Error $e) {\n    echo 'OK';\n}\n?>")).toMatchSnapshot();
  });
});
