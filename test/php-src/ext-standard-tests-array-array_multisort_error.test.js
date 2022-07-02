// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_error.phpt
  it("Test array_multisort() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : error conditions ***\\n\";\necho \"\\n-- Testing array_multisort() function with repeated flags --\\n\";\n$ar1 = array(1);\ntry {\n    var_dump( array_multisort($ar1, SORT_ASC, SORT_ASC) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_multisort() function with repeated flags --\\n\";\n$ar1 = array(1);\ntry {\n    var_dump( array_multisort($ar1, SORT_STRING, SORT_NUMERIC) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
