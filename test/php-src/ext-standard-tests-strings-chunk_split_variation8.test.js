// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation8.phpt
  it("Test chunk_split() function : usage variations - different integer values for 'chunklen' with heredoc string as 'str'(Bug#42796)", function () {
    expect(parser.parseCode("<?php\n/*\n* passing different integer values for 'chunklen' and heredoc string for 'str' to chunk_split()\n*/\necho \"*** Testing chunk_split() : different 'chunklen' with heredoc 'str' ***\\n\";\n// Initializing required variables\n//heredoc string as str\n$heredoc_str = <<<EOT\nThis's heredoc string with \\t and \\n white space char.\nIt has _speci@l ch@r$ 2222 !!!Now \\k as escape char to test\nchunk_split()\nEOT;\n$ending = ':::';\n// different values for 'chunklen'\n$values = array (\n  0,\n  1,\n  -123,  //negative integer\n  0234,  //octal number\n  0x1A,  //hexadecimal number\n  PHP_INT_MAX,      // max positive integer number\n  PHP_INT_MAX * 3,  // integer overflow\n  -PHP_INT_MAX - 1, // min negative integer\n);\n// loop through each element of values for 'chunklen'\nfor($count = 0; $count < count($values); $count++) {\n  echo \"-- Iteration \".($count+1). \" --\\n\";\n  try {\n    var_dump( chunk_split($heredoc_str, $values[$count], $ending) );\n  } catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n  } catch (\\ValueError $e) {\n      echo $e->getMessage() . \"\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
