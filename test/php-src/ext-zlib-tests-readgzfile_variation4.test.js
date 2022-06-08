// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_variation4.phpt
  it("Test function readgzfile() by substituting argument 1 with float values.", function () {
    expect(parser.parseCode("<?php\n$use_include_path = false;\n$variation = array(\n  'float 10.5' => 10.5,\n  'float -10.5' => -10.5,\n  'float 12.3456789000e10' => 12.3456789000e10,\n  'float -12.3456789000e10' => -12.3456789000e10,\n  'float .5' => .5,\n  );\nforeach ( $variation as $var ) {\n  var_dump(readgzfile( $var ,  $use_include_path ) );\n}\n?>")).toMatchSnapshot();
  });
});
