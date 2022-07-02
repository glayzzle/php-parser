// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_variation4.phpt
  it("Test array_fill() function : usage variations - using return value of array_fill for 'val' argument", function () {
    expect(parser.parseCode("<?php\n/* passing array_fill() as the 'val' argument in array_fill() function */\necho \"*** Testing array_fill() : variation ***\\n\";\n$start_key = 0;\n$num = 2;\n$heredoc = <<<HERE_DOC\nHello\nHERE_DOC;\n// array of possible valid values for 'val' argument\n$values = array (\n  /* 1  */  NULL,\n            0,\n            1,\n  /* 4  */  1.0,\n            'hi',\n            \"hi\",\n  /* 7  */  $heredoc\n);\necho \"*** Filling 2 dimensional array with all basic valid values ***\\n\";\n$counter = 1;\nfor($i =0; $i < count($values); $i ++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $val = $values[$i];\n  var_dump( array_fill($start_key,$num,array_fill($start_key,$num,$val)) );\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
