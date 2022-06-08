// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_variation4.phpt
  it("Test function get_cfg_var() by substituting argument 1 with float values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with float values ***\\n\";\n$variation_array = array(\n  'float 10.5' => 10.5,\n  'float -10.5' => -10.5,\n  'float 12.3456789000e10' => 12.3456789000e10,\n  'float -12.3456789000e10' => -12.3456789000e10,\n  'float .5' => .5,\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(get_cfg_var( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
