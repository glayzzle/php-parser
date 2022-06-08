// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation7.phpt
  it("Test chunk_split() function : usage variations - different double quoted values for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different double quoted strings for 'str' argument to chunk_split()\n* here 'chunklen' is set to 5 and 'ending' is \"????\"\n*/\necho \"*** Testing chunk_split() : with different double quoted values for 'str' argument ***\\n\";\n// Initializing variables\n$chunklen = 5;\n$ending = \"????\";\n// different values for 'str'\n$values = array(\n  \"\",  //empty\n  \" \",  //space\n  \"This is simple string\",  //regular string\n  \"It's string with quotes\",  //string containing single quote\n  \"This contains @ # $ % ^ & chars\",   //string with special characters\n  \"This string\\tcontains\\rwhite space\\nchars\",\n  \"This is string with 1234 numbers\",\n  \"This is string with \\0 and \".chr(0).\"null chars\",  //for binary safe\n  \"This is string with    multiple         space char\",\n  \"Testing invalid \\k and \\m escape char\",\n  \"This is to check with \\\\n and \\\\t\" //to ignore \\n and \\t results\n);\n// loop through each element of the array for 'str'\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration \".($count+1).\" --\\n\";\n  var_dump( chunk_split( $values[$count], $chunklen, $ending) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
