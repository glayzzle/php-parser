// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/encapsed_string_deref.phpt
  it("Dereferencing operations on an encapsed string", function () {
    expect(parser.parseCode("<?php\n$bar = \"bar\";\nvar_dump(\"foo$bar\"[0]);\nvar_dump(\"foo$bar\"->prop);\ntry {\n    var_dump(\"foo$bar\"->method());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclass FooBar { public static $prop = 42; }\nvar_dump(\"foo$bar\"::$prop);\nfunction foobar() { return 42; }\nvar_dump(\"foo$bar\"());\n?>")).toMatchSnapshot();
  });
});
