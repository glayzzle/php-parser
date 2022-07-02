// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42859.phpt
  it("Bug #42859 (import always conflicts with internal classes)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Ex {}\nuse Blah\\Exception;\nuse Blah\\Ex;\n?>")).toMatchSnapshot();
  });
});
