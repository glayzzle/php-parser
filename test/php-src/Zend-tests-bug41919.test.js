// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41919.phpt
  it("Bug #41919 (crash in string to array conversion)", function () {
    expect(parser.parseCode("<?php\n$foo=\"50\";\n$foo[3]->bar[1] = \"bang\";\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
