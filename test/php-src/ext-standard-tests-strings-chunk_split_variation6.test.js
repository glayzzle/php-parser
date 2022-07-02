// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation6.phpt
  it("Test chunk_split() function : usage variations - single quoted strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different single quoted strings as 'str' argument to the function\n* 'chunklen' is set to 7 and 'ending' is '):('\n*/\necho \"*** Testing chunk_split() : with different single quoted 'str' ***\\n\";\n//Initializing variables\n$chunklen = 7;\n$ending = \"):(\";\n//different single quoted string for 'str'\n$values = array(\n  '',  //empty\n  ' ',  //space\n  'This is simple string',  //regular string\n  'It\\'s string with quotes',\n  'This contains @ # $ % ^ & chars',   //special characters\n  'This string\\tcontains\\rwhite space\\nchars',  //with white space chars\n  'This is string with 1234 numbers',\n  'This is string with \\0 and \".chr(0).\"null chars',  //for binary safe\n  'This is string with    multiple         space char',\n  'This is to check string with ()',\n  '     Testing with    multiple spaces     ',\n  'Testing invalid \\k and \\m escape char',\n  'This is to check with \\\\n and \\\\t'\n);\n//Loop through each element of values for 'str'\nfor($count = 0;$count < count($values);$count++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( chunk_split($values[$count], $chunklen, $ending) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
