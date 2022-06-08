// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_variation7.phpt
  it("Test function get_cfg_var() by substituting argument 1 with string values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with unknown string values ***\\n\";\n$heredoc = <<<EOT\nhello world\nEOT;\n$variation_array = array(\n  'string DQ' => \"string\",\n  'string SQ' => 'string',\n  'mixed case string' => \"sTrInG\",\n  'heredoc' => $heredoc\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(get_cfg_var( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
