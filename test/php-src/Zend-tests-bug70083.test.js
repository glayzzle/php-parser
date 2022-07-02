// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70083.phpt
  it("Bug #70083 (Use after free with assign by ref to overloaded objects)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private $var;\n    function __get($e) {\n        return $this;\n    }\n}\nfunction &noref() { $foo = 1; return $foo; }\n$foo = new foo;\ntry {\n    $foo->i = &noref();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
