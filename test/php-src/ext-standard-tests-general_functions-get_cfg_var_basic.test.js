// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_basic.phpt
  it("Test function get_cfg_var() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments ***\\n\";\nvar_dump(get_cfg_var( 'session.use_cookies' ) );\nvar_dump(get_cfg_var( 'session.serialize_handler' ) );\nvar_dump(get_cfg_var( 'session.save_handler' ) );\n?>")).toMatchSnapshot();
  });
});
