// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_variation5.phpt
  it("Test function readgzfile() by substituting argument 1 with int values.", function () {
    expect(parser.parseCode("<?php\n$use_include_path = false;\n$variation = array (\n    'int 0' => 0,\n    'int 1' => 1,\n    'int 12345' => 12345,\n    'int -12345' => -2345,\n    );\nforeach ( $variation as $var ) {\n  var_dump(readgzfile( $var ,  $use_include_path ) );\n}\n?>")).toMatchSnapshot();
  });
});
