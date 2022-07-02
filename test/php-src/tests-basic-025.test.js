// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/025.phpt
  it("Test HTTP_RAW_POST_DATA with excessive post length", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST, $HTTP_RAW_POST_DATA);\n?>")).toMatchSnapshot();
  });
});
