// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_variation7.phpt
  it("Test function readgzfile() by substituting argument 1 with string values.", function () {
    expect(parser.parseCode("<?php\n$use_include_path = false;\n$heredoc = <<<EOT\nhello world\nEOT;\n$variation_array = array(\n  'string DQ' => \"string\",\n  'string SQ' => 'string',\n  'mixed case string' => \"sTrInG\",\n  'heredoc' => $heredoc\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(readgzfile( $var ,  $use_include_path ) );\n}\n?>")).toMatchSnapshot();
  });
});
