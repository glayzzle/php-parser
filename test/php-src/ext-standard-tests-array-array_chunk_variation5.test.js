// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_variation5.phpt
  it("Test array_chunk() function : usage variations - different 'size' values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_chunk() function with following conditions\n *   1. -ve size value\n *   2. size value is more than the no. of elements in the input array\n *   3. size value is zero\n *   4. Decimal size value\n*/\necho \"*** Testing array_chunk() : usage variations ***\\n\";\n// input array\n$input_array = array(1, 2, 3);\n// different magnitude's\n$sizes = array(-1, count($input_array) + 1, 0, 1);\n// loop through the array for size argument\nforeach ($sizes as $size){\n    echo \"\\n-- Testing array_chunk() when size = $size --\\n\";\n    try {\n        var_dump( array_chunk($input_array, $size) );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        var_dump( array_chunk($input_array, $size, true) );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        var_dump( array_chunk($input_array, $size, false) );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
