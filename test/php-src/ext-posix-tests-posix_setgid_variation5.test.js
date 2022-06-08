// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_setgid_variation5.phpt
  it("Test function posix_setgid() by substituting argument 1 with int values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with int values ***\\n\";\n$variation_array = array (\n    'long 0' => 0,\n    'long 1' => 1,\n    'int -12345' => -2345,\n    );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_setgid( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
