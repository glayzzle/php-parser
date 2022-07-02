// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_005.phpt
  it("Error case: class constant as an encapsed containing a variable", function () {
    expect(parser.parseCode("<?php\n  class myclass\n  {\n      const myConst = \"$myVar\";\n  }\n?>")).toMatchSnapshot();
  });
});
