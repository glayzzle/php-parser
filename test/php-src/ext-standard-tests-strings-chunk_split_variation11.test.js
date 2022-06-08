// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation11.phpt
  it("Test chunk_split() function : usage variations - different strings for 'ending' with heredoc 'str'", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different strings for 'ending' and heredoc string as 'str' to chunk_split()\n* 'chunklen' is set to 6E0 for this testcase\n*/\necho \"*** Testing chunk_split() : different values for 'ending' with heredoc 'str'***\\n\";\n// Initializing required variables\n// heredoc string for 'str' argument\n$heredoc_str = <<<EOT\nThis is heredoc string with \\t and \\n.It also contains\nsPeci@! ch@r$ :) & numbers 222.This is \\k wrong escape char.\nEOT;\n$chunklen = 6E+0;\n//different values for 'ending'\n$values = array (\n  \"\",  //empty\n  \" \",  //space\n  \"a\",  //single char\n  \"ENDING\",  //regular string\n  \"\\r\\n\",  //White space char\n  \"123\",  //Numeric\n  \")speci@! ch@r$(\",  //String with special chars\n);\n//loop through each values for 'ending'\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration \".($count+1). \" --\\n\";\n  var_dump( chunk_split($heredoc_str, $chunklen, $values[$count]) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
