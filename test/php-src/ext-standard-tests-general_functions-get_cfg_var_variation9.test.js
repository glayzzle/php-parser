// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_variation9.phpt
  it("Test function get_cfg_var() by substituting argument with array of valid parameters.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument with array of valid parameters ***\\n\";\n$heredoc = <<<EOT\nhello world\nEOT;\n$variation_array = array(\n  'session.use_cookies',\n  'session.serialize_handler',\n  'session.save_handler'\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(get_cfg_var( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
