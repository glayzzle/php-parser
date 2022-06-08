// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_006.phpt
  it("Abstract constants are not allowed", function () {
    expect(parser.parseCode("<?php\nclass A {\n    abstract const X = 1;\n}\n?>")).toMatchSnapshot();
  });
});
