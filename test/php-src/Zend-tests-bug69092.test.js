// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69092.phpt
  it("Bug #69092 (Declare Encoding Compile Check Wrong)", function () {
    expect(parser.parseCode("<?php\necho \"Hi\";\nfunction foo() {\n    declare(encoding=\"utf-8\");\n}\necho \"Bye\"\n?>")).toMatchSnapshot();
  });
});
