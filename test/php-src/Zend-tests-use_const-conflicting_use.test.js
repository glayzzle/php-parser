// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/conflicting_use.phpt
  it("use const statements with conflicting names", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    const baz = 42;\n}\nnamespace bar {\n    const baz = 42;\n}\nnamespace {\n    use const foo\\baz, bar\\baz;\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
