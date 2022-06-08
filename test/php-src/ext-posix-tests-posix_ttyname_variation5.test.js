// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation5.phpt
  it("Test function posix_ttyname() by substituting argument 1 with int values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with int values ***\\n\";\n$variation_array = array (\n    'int 12345' => 12345,\n    'int -12345' => -2345,\n    );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
