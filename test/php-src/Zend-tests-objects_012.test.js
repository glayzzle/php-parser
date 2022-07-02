// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_012.phpt
  it("implementing a class", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\ninterface bar extends foo {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
