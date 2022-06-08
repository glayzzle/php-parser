// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43027.phpt
  it("Bug #43027 (Declare cause fatal error)", function () {
    expect(parser.parseCode("<?php\ndeclare(ticks=1);\nnamespace test;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
