// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation2.phpt
  it("Test function posix_ttyname() by substituting argument 1 with boolean values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with boolean values ***\\n\";\n$variation_array = array(\n  'lowercase true' => true,\n  'lowercase false' =>false,\n  'uppercase TRUE' =>TRUE,\n  'uppercase FALSE' =>FALSE,\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
