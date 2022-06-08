// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/unlinked_parent_2.phpt
  it("Using an unlinked parent interface", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    class X implements B {}\n});\ntry {\n    interface B extends A {\n    }\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
