// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/basic.phpt
  it("import namespaced constant", function () {
    expect(parser.parseCode("<?php\nnamespace foo\\bar {\n    const baz = 42;\n    const qux = 43;\n}\nnamespace {\n    use const foo\\bar\\baz, foo\\bar\\qux;\n    var_dump(baz);\n    var_dump(qux);\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
