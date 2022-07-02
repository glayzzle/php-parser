// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/conflicting_use_alias.phpt
  it("use and use function with the same alias", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    function foo() {\n        return 'foo';\n    }\n}\nnamespace x {\n    use foo as bar;\n    use function foo as bar;\n    var_dump(bar());\n}\n?>")).toMatchSnapshot();
  });
});
