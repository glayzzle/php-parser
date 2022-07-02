// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_variation.phpt
  it("Test range() function (variation-1)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing range() with various low and high values ***\";\n$low_arr = array( \"ABCD\", -10.5555, TRUE, NULL, FALSE, \"\", array(1,2));\n$high_arr = array( \"ABCD\", -10.5555, TRUE, NULL, FALSE, \"\", array(1,2));\nfor( $i = 0; $i < count($low_arr); $i++) {\n  for( $j = 0; $j < count($high_arr); $j++) {\n    echo @\"\\n-- creating an array with low = '$low_arr[$i]' and high = '$high_arr[$j]' --\\n\";\n    var_dump( range( $low_arr[$i], $high_arr[$j] ) );\n  }\n}\necho \"\\n*** Possible variatins with steps ***\\n\";\nvar_dump( range( 1, 5, TRUE ) );\ntry {\n    var_dump( range( 1, 5, array(1, 2) ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
