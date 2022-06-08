// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation1.phpt
  it("Test function posix_ttyname() by substituting argument 1 with array values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with array values ***\\n\";\n$index_array = array(1, 2, 3);\n$assoc_array = array(1 => 'one', 2 => 'two');\n$variation_array = array(\n  'empty array' => array(),\n  'int indexed array' => $index_array,\n  'associative array' => $assoc_array,\n  'nested arrays' => array('foo', $index_array, $assoc_array),\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
