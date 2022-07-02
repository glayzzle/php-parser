// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/parent_is_not_proto.phpt
  it("The parent class is not necessarily the class of the prototype", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function test(): B {}\n}\nclass B extends A {}\nclass C extends B {\n    function test(): parent {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
