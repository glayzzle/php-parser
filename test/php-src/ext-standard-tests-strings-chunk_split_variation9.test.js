// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation9.phpt
  it("Test chunk_split() function : usage variations - different double quoted strings for 'ending' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different double quoted strings for 'ending' argument to chunk_split()\n* here 'chunklen' is set to 6.5\n*/\necho \"*** Testing chunk_split() : different strings for 'ending' ***\\n\";\n//Initializing variables\n$str = \"This is to test chunk_split() with various ending string\";\n$chunklen = 6;\n//different values for 'ending' argument\n$values = array (\n  \"\",  //empty\n  \" \",  //space\n  \"a\",  //Single char\n  \"ENDING\",  //regular string\n  \"@#$%^\",  //Special chars\n  // white space chars\n  \"\\t\",\n  \"\\n\",\n  \"\\r\",\n  \"\\r\\n\",\n  \"\\0\",  //Null char\n  \"123\",  //Numeric\n  \"(MSG)\",  //With ( and )\n  \")ending string(\",  //sentence as ending string\n  \")numbers 1234(\",\n  \")speci@! ch@r$(\"\n);\n//loop through element of values for 'ending'\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( chunk_split($str, $chunklen, $values[$count]) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
