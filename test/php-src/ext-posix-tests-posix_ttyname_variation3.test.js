// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation3.phpt
  it("Test function posix_ttyname() by substituting argument 1 with emptyUnsetUndefNull values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with emptyUnsetUndefNull values ***\\n\";\n$unset_var = 10;\nunset($unset_var);\n$variation_array = array(\n  'unset var' => @$unset_var,\n  'undefined var' => @$undefined_var,\n  'empty string DQ' => \"\",\n  'empty string SQ' => '',\n  'uppercase NULL' => NULL,\n  'lowercase null' => null,\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
