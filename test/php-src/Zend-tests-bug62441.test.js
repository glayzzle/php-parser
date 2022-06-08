// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62441.phpt
  it("Bug #62441: Incorrect strong typing in namespaced child classes", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    interface Iface {\n        function method(stdClass $o);\n    }\n}\nnamespace ns {\n    class Foo implements \\Iface {\n        function method(stdClass $o) { }\n    }\n    (new Foo)->method(new \\stdClass);\n}\n?>")).toMatchSnapshot();
  });
});
