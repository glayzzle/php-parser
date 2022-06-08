// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_005.phpt
  it("Static constants are not allowed", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static const X = 1;\n}\n?>")).toMatchSnapshot();
  });
});
