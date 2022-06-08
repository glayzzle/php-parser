// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/ignore_constants.phpt
  it("use function should ignore namespaced constants", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    const bar = 42;\n}\nnamespace {\n    const bar = 43;\n}\nnamespace {\n    use function foo\\bar;\n    var_dump(bar);\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
