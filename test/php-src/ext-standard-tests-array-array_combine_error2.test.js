// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_combine_error2.phpt
  it("Test array_combine() function : error conditions - empty array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_combine() : error conditions specific to array_combine() ***\\n\";\n// Testing array_combine by passing empty arrays to $keys and $values arguments\necho \"\\n-- Testing array_combine() function with empty arrays --\\n\";\nvar_dump( array_combine(array(), array()) );\n// Testing array_combine by passing empty array to $keys\necho \"\\n-- Testing array_combine() function with empty array for \\$keys argument --\\n\";\ntry {\n    var_dump( array_combine(array(), array(1, 2)) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n// Testing array_combine by passing empty array to $values\necho \"\\n-- Testing array_combine() function with empty array for \\$values argument --\\n\";\ntry {\n    var_dump( array_combine(array(1, 2), array()) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n// Testing array_combine with arrays having unequal number of elements\necho \"\\n-- Testing array_combine() function by passing array with unequal number of elements --\\n\";\ntry {\n    var_dump( array_combine(array(1, 2), array(1, 2, 3)) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
