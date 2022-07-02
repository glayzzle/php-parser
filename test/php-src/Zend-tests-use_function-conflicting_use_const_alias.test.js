// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/conflicting_use_const_alias.phpt
  it("use const and use function with the same alias", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    const foo = 'foo.const';\n    function foo() {\n        return 'foo.function';\n    }\n}\nnamespace x {\n    use const foo as bar;\n    use function foo as bar;\n    var_dump(bar);\n    var_dump(bar());\n}\n?>")).toMatchSnapshot();
  });
});
