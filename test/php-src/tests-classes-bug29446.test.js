// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug29446.phpt
  it("Bug #29446 (ZE allows multiple declarations of the same class constant)", function () {
    expect(parser.parseCode("<?php\nclass testClass {\n  const TEST_CONST = 'test';\n  const TEST_CONST = 'test1';\n  function testClass() {\n    echo self::TEST_CONST;\n  }\n}\n$test = new testClass;\n?>")).toMatchSnapshot();
  });
});
