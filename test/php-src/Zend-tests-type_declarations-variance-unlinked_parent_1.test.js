// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/unlinked_parent_1.phpt
  it("Using an unlinked parent class", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    class X extends B {}\n});\ntry {\n    class B extends A {\n    }\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
