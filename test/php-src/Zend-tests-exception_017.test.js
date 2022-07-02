// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_017.phpt
  it("Exceptions on improper usage of $this", function () {
    expect(parser.parseCode("<?php\nabstract class C {\n    abstract static function foo();\n}\nfunction foo(callable $x) {\n}\ntry {\n    C::foo();\n} catch (Error $e) {\n    echo $e, \"\\n\\n\";\n}\ntry {\n    foo(\"C::foo\");\n} catch (Error $e) {\n    echo $e, \"\\n\\n\";\n}\nC::foo();\n?>")).toMatchSnapshot();
  });
});
