// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/no_global_fallback2.phpt
  it("non-existent imported functions should not be looked up in the global table", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    function test() {\n        echo \"NO!\";\n    }\n}\nnamespace foo {\n    use function bar\\test;\n    test();\n}\n?>")).toMatchSnapshot();
  });
});
