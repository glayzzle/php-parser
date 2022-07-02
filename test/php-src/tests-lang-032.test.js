// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/032.phpt
  it("Class method registration", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() {}\n}\nclass B extends A {\n    function foo() {}\n}\nclass C extends B {\n    function foo() {}\n}\nclass D extends A {\n}\nclass F extends D {\n    function foo() {}\n}\n// Following class definition should fail, but cannot test\n/*\nclass X {\n    function foo() {}\n    function foo() {}\n}\n*/\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
