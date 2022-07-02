// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_013.phpt
  it("implementing the same interface twice", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n}\nclass bar implements foo, foo {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
