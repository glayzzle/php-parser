// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/infinite_recursion.phpt
  it("Infinite recursion in unlinked_instanceof()", function () {
    expect(parser.parseCode("<?php\ninterface I {}\nspl_autoload_register(function() {\n    class X {\n        function test(): I {}\n    }\n    class Y extends X {\n        function test(): C {}\n    }\n});\nclass C extends Z implements C {}\n?>")).toMatchSnapshot();
  });
});
