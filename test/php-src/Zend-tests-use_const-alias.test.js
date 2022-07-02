// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/alias.phpt
  it("aliasing imported constants to resolve naming conflicts", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    const baz = 42;\n}\nnamespace bar {\n    const baz = 43;\n}\nnamespace {\n    use const foo\\baz as foo_baz,\n              bar\\baz as bar_baz;\n    var_dump(foo_baz);\n    var_dump(bar_baz);\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
