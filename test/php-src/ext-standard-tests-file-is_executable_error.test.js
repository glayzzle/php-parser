// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_executable_error.phpt
  it("Test is_executable() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing is_exceutable() on non-existent directory ***\\n\";\nvar_dump( is_executable(__DIR__.\"/is_executable\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
