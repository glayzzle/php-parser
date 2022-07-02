// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69092.2.phpt
  it("Bug #69092-2 (Declare Encoding Compile Check Wrong) - multibyte off", function () {
    expect(parser.parseCode("<?php\necho \"Hi\";\nfunction foo() {\n    declare(encoding=\"UTF-8\");\n}\necho \"Bye\"\n?>")).toMatchSnapshot();
  });
});
