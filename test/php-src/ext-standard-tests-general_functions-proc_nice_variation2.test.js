// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_nice_variation2.phpt
  it("Test function proc_nice() by substituting argument 1 with boolean values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with boolean values ***\\n\";\n$variation_array = array(\n  'lowercase true' => true,\n  'lowercase false' =>false,\n  'uppercase TRUE' =>TRUE,\n  'uppercase FALSE' =>FALSE,\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(proc_nice( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
