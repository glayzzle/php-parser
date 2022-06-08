// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_late_binding_conflict.phpt
  it("Use conflicts are detected for late-bound classes", function () {
    expect(parser.parseCode("<?php\n/* Reverse declaration order disables early-binding */\nclass B extends A {}\nclass A {}\nuse Foo\\B;\n?>")).toMatchSnapshot();
  });
});
