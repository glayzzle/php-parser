// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_variation8.phpt
  it("Test function get_cfg_var() by calling deprecated option", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with deprecated option ***\\n\";\nvar_dump(get_cfg_var( 'magic_quotes_gpc' ) );\n?>")).toMatchSnapshot();
  });
});
