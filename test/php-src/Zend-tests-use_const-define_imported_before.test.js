// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/define_imported_before.phpt
  it("using const with same name as defined should fail", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    const bar = 42;\n    use const foo\\bar;\n}\nnamespace {\n    echo \"Done\";\n}\n?>")).toMatchSnapshot();
  });
});
