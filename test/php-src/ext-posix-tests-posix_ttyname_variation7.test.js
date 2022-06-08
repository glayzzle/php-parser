// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation7.phpt
  it("Test function posix_ttyname() by substituting argument 1 with string values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with string values ***\\n\";\n$heredoc = <<<EOT\nhello world\nEOT;\n$variation_array = array(\n  'string DQ' => \"string\",\n  'string SQ' => 'string',\n  'mixed case string' => \"sTrInG\",\n  'heredoc' => $heredoc,\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
