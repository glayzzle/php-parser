// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29368_2.phpt
  it("Bug #29368.2 (The destructor is called when an exception is thrown from the constructor).", function () {
    expect(parser.parseCode("<?php\nclass Bomb {\n    function foo() {\n    }\n    function __destruct() {\n        throw new Exception(\"bomb!\");\n    }\n}\ntry {\n    $x = new ReflectionMethod(new Bomb(), \"foo\");\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
