// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/conflicting_use_alias.phpt
  it("use and use const with the same alias", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    const foo = 'foo';\n}\nnamespace x {\n    use foo as bar;\n    use const foo as bar;\n    var_dump(bar);\n}\n?>")).toMatchSnapshot();
  });
});
