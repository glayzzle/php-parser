// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_properties_const.phpt
  it("Const class properties(runtime cache)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\n$a = new A;\necho \"runtime\\n\";\nvar_dump($a->{array()});\nvar_dump($a->{1});\nvar_dump($a->{function(){}});\n?>")).toMatchSnapshot();
  });
});
