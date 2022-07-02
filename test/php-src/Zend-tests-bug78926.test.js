// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78926.phpt
  it("Bug #78926: Segmentation fault on Symfony cache:clear", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    for ($i = 0; $i < 100; $i++) {\n        eval(\"class C$i {}\");\n    }\n});\ntry {\n    class B extends A {}\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(class_exists('B', false));\n?>")).toMatchSnapshot();
  });
});
