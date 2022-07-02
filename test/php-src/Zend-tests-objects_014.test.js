// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_014.phpt
  it("extending the same interface twice", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n}\ninterface bar extends foo, foo {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
