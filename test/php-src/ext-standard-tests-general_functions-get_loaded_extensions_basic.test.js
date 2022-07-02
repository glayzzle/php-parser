// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_loaded_extensions_basic.phpt
  it("Test get_loaded_extensions() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_loaded_extensions() : basic functionality ***\\n\";\necho \"Get loaded extensions\\n\";\nvar_dump(get_loaded_extensions());\n?>")).toMatchSnapshot();
  });
});
