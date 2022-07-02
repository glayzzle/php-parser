// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcspn_variation11.phpt
  it("Test strcspn() function : usage variations - with varying start and default len args", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing strcspn() : with varying start and default len arguments\n*/\necho \"*** Testing strcspn() : with different start and default len values ***\\n\";\n// initialing required variables\n// initialing required variables\n$strings = array(\n                   \"\",\n                   '',\n                   \"\\n\",\n                   '\\n',\n                   \"hello\\tworld\\nhello\\nworld\\n\",\n                   'hello\\tworld\\nhello\\nworld\\n',\n                   \"1234hello45world\\t123\",\n                   '1234hello45world\\t123',\n                   \"hello\\0world\\012\",\n                   'hello\\0world\\012',\n                   chr(0).chr(0),\n                   chr(0).\"hello\\0world\".chr(0),\n                   chr(0).'hello\\0world'.chr(0),\n                   \"hello\".chr(0).\"world\",\n                   'hello'.chr(0).'world',\n                   \"hello\\0\\100\\xaaaworld\",\n                   'hello\\0\\100\\xaaaworld'\n                   );\n// defining array of mask strings\n$mask_array = array(\n                    \"\",\n                    '',\n                    \"\\n\\trsti \\l\",\n                    '\\n\\trsti \\l',\n                    \"\\t\",\n                    \"t\\ \",\n                    '\\t',\n                    \"\\t\\ \",\n                    \" \\t\",\n                    \"\\t\\i\\100\\xa\"\n                   );\n//defining array of start values\n$start_array = array(\n                     0,\n                     1,\n                     2,\n                     -1,\n                     -2,\n                     2147483647,  // max positive integer\n                     -2147483648,  // min negative integer\n                    );\n// loop through each element of the arrays for str,mask and start arguments\n$count = 1;\nforeach($strings as $str) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($mask_array as $mask) {\n    foreach($start_array as $start) {\n      var_dump( strcspn($str,$mask,$start) );\n    }\n  }\n  $count++;\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
