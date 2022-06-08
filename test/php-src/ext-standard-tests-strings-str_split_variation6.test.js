// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_split_variation6.phpt
  it("Test str_split() function : usage variations - different integer values for 'split_length' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different integer values for 'split_length' argument to str_split()\n*/\necho \"*** Testing str_split() : different integer values for 'split_length' ***\\n\";\n//Initialise variables\n$str = 'This is a string with 123 & escape char \\t';\n//different values for 'split_length'\n$values = array (\n  0,\n  1,\n  -123,  //negative integer\n  0234,  //octal number\n  0x1A,  //hexadecimal number\n  2147483647,  //max positive integer number\n  -2147483648,  //min negative integer\n);\n//loop through each element of $values for 'split_length'\nfor($count = 0; $count < count($values); $count++) {\n    echo \"-- Iteration \".($count + 1).\" --\\n\";\n    try {\n        var_dump( str_split($str, $values[$count]) );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
