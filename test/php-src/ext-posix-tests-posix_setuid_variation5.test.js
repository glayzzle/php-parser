// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_setuid_variation5.phpt
  it("Test function posix_setuid() by substituting argument 1 with int values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with int values ***\\n\";\n$variation_array = array (\n    'int 0' => 0,\n    'int 1' => 1,\n    'int -12345' => -12345,\n    );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_setuid( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
