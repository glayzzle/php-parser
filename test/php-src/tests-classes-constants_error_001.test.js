// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_001.phpt
  it("Error case: duplicate class constant definition", function () {
    expect(parser.parseCode("<?php\n  class myclass\n  {\n      const myConst = \"hello\";\n      const myConst = \"hello again\";\n  }\n?>")).toMatchSnapshot();
  });
});
