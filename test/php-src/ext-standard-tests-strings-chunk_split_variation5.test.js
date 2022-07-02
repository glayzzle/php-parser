// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation5.phpt
  it("Test chunk_split() function : usage variations - different integer values for 'chunklen' argument(Bug#42796)", function () {
    expect(parser.parseCode("<?php\n/*\n* passsing different integer values for 'chunklen' argument to chunk_split()\n* 'ending' is set to '||'\n*/\necho \"*** Testing chunk_split() : different integer values for 'chunklen' ***\\n\";\n //Initializing variables\n$ending = \"||\";\n$str = \"This contains\\tand special char & numbers 123.\\nIt also checks for \\0 char\";\n// different values for chunklen\n$values = array (\n  0,\n  1,\n  -123,  //negative integer\n  0234,  //octal number\n  0x1A,  //hexadecimal number\n  PHP_INT_MAX,  //max positive integer number\n  PHP_INT_MAX * 3,  //integer overflow\n  -PHP_INT_MAX - 1,  //min negative integer\n);\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration $count --\\n\";\n  try {\n    var_dump( chunk_split($str, $values[$count], $ending) );\n  } catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n  } catch (\\ValueError $e) {\n      echo $e->getMessage() . \"\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
