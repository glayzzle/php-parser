// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_pop.phpt
  it("Test array_pop() function", function () {
    expect(parser.parseCode("<?php\n$empty_array = array();\n$number = 5;\n$str = \"abc\";\n/* Various combinations of arrays to be used for the test */\n$mixed_array = array(\n  array(),\n  array( 1,2,3,4,5,6,7,8,9 ),\n  array( \"One\", \"_Two\", \"Three\", \"Four\", \"Five\" ),\n  array( 6, \"six\", 7, \"seven\", 8, \"eight\", 9, \"nine\" ),\n  array( \"a\" => \"aaa\", \"A\" => \"AAA\", \"c\" => \"ccc\", \"d\" => \"ddd\", \"e\" => \"eee\" ),\n  array( \"1\" => \"one\", \"2\" => \"two\", \"3\" => \"three\", \"4\" => \"four\", \"5\" => \"five\" ),\n  array( 1 => \"one\", 2 => \"two\", 3 => 7, 4 => \"four\", 5 => \"five\" ),\n  array( \"f\" => \"fff\", \"1\" => \"one\", 4 => 6, \"\" => \"blank\", 2 => \"float\", \"F\" => \"FFF\",\n         \"blank\" => \"\", 3 => 3.7, 5 => 7, 6 => 8.6, '5' => \"Five\", \"4name\" => \"jonny\", \"a\" => NULL, NULL => 3 ),\n  array( 12, \"name\", 'age', '45' ),\n  array( array(\"oNe\", \"tWo\", 4), array(10, 20, 30, 40, 50), array() ),\n  array( \"one\" => 1, \"one\" => 2, \"three\" => 3, 3, 4, 3 => 33, 4 => 44, 5, 6,\n          5 => 57, \"5.4\" => 554, \"5.7\" => 557 )\n);\n/* Loop to test normal functionality with different arrays inputs */\necho \"\\n*** Normal testing with various array inputs ***\\n\";\n$counter = 1;\nforeach( $mixed_array as $sub_array )\n{\n echo \"\\n-- Input Array for Iteration $counter is --\\n\";\n var_dump( $sub_array );\n echo \"\\nOutput after Pop is :\\n\";\n var_dump( array_pop($sub_array) );\n $counter++;\n}\necho\"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
