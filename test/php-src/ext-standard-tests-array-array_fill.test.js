// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill.phpt
  it("basic array_fill test", function () {
    expect(parser.parseCode("<?php\n$array1 = array(0.0, 1, 2);\n$array2 = array(TRUE, FALSE, NULL, \"d\", \"e\", \"f\");\nforeach($array1 as $start)\n{\n   foreach($array1 as $num)\n   {\n      foreach($array2 as $value)\n      {\n         echo '==========================='.\"\\n\";\n     echo 'start: '.$start.' num: '.$num.' value: '. var_dump($value);\n     $output = array_fill($start, $num, $value);\n     var_dump($output);\n      }\n   }\n}\n?>")).toMatchSnapshot();
  });
});
