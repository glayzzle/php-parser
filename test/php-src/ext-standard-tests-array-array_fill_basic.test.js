// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_basic.phpt
  it("Test array_fill() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_fill() : basic functionality ***\\n\";\n// calling the array_fill with all possible valid values for 'val' argument\n$start_key = 0 ;\n$num = 2;\n$heredoc = <<<HERE_DOC\nHello\nHERE_DOC;\n// array of possible valid values for 'val' argument\n$values = array (\n  /* 1  */  NULL,\n            0,\n            1,\n  /* 4  */  1.5,\n            'hi',\n            \"hi\",\n  /* 7  */  $heredoc\n);\n$counter = 1;\nfor($i = 0; $i < count($values); $i ++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $val = $values[$i];\n  var_dump( array_fill($start_key,$num,$val) );\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
