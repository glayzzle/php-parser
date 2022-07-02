// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation13.phpt
  it("Test chunk_split() function : usage variations - default 'chunklen' with long string as 'str'argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing long string as 'str' and testing default value of chunklen which is 76\n*/\necho \"*** Testing chunk_split() : default 'chunklen' with long string 'str' ***\\n\";\n//Initializing variables\n$values = array (\n  \"123456789012345678901234567890123456789012345678901234567890123456789012345678901\",\n  \"1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"\n);\n//loop through each element of values for 'str' and default value of 'chunklen'\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( chunk_split($values[$count]) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
