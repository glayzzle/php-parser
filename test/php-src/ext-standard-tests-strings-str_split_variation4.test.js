// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_split_variation4.phpt
  it("Test str_split() function : usage variations - different single quoted strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different single quoted strings as 'str' argument to str_split()\n* split_length is set to 5\n*/\necho \"*** Testing str_split() : single quoted strings for 'str' ***\\n\";\n//Initialize variables\n$split_length = 5;\n// different values for 'str'\n$values = array(\n  '',  //empty\n  ' ',  //space\n  '1234', //with only numbers\n  'simple string',  //regular string\n  'It\\'s string with quote',  //string containing single quote\n  'string\\tcontains\\rwhite space\\nchars',\n  'containing @ # $ % ^ & chars',\n  'with 1234 numbers',\n  'with \\0 and \".chr(0).\"null chars',  //for binary safe\n  'with    multiple     space char',\n  'Testing invalid \\k and \\m escape char',\n  'to check with \\\\n and \\\\t' //ignoring \\n and \\t results\n);\n//loop through each element of $values for 'str' argument\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration \".($count+1).\" --\\n\";\n  var_dump( str_split($values[$count], $split_length) );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
