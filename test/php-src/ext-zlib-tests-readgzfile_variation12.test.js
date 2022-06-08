// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_variation12.phpt
  it("Test function readgzfile() by substituting argument 2 with int values.", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/004.txt.gz\";\n$variation = array (\n    'int 0' => 0,\n    'int 1' => 1,\n    'int 12345' => 12345,\n    'int -12345' => -2345,\n    );\nforeach ( $variation as $var ) {\n  var_dump(readgzfile( $filename, $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
