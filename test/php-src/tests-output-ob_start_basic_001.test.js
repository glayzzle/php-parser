// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_001.phpt
  it("Test return type and value for ob_start()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nvar_dump(ob_start());\n?>")).toMatchSnapshot();
  });
});
