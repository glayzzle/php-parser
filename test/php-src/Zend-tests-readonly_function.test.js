// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_function.phpt
  it("Can use readonly as a function name", function () {
    expect(parser.parseCode("<?php\nfunction readonly() {\n    echo \"Hi!\\n\";\n}\nreadonly();\nreadonly ();\n?>")).toMatchSnapshot();
  });
});
