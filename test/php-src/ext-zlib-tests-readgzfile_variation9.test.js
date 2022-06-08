// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_variation9.phpt
  it("Test function readgzfile() by substituting argument 2 with boolean values.", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/004.txt.gz\";\n$variation = array(\n  'lowercase true' => true,\n  'lowercase false' =>false,\n  'uppercase TRUE' =>TRUE,\n  'uppercase FALSE' =>FALSE,\n  );\nforeach ( $variation as $var ) {\n  var_dump(readgzfile( $filename, $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
