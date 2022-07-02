// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_002.phpt
  it("Error case: class constant as an array", function () {
    expect(parser.parseCode("<?php\n  class myclass\n  {\n      const myConst = array();\n  }\n?>\n===DONE===")).toMatchSnapshot();
  });
});
