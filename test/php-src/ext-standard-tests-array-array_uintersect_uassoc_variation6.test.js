// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_uintersect_uassoc_variation6.phpt
  it("Test array_uintersect_uassoc() function : usage variation - incorrect callbacks", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_uintersect_uassoc() : usage variation - incorrect callbacks ***\\n\";\n$arr1 = array(1);\n$arr2 = array(1,2);\necho \"\\n-- comparison function with an incorrect return value --\\n\";\nfunction incorrect_return_value ($val1, $val2) {\n  return array(1);\n}\nvar_dump(array_uintersect_uassoc($arr1, $arr2, 'incorrect_return_value', 'incorrect_return_value'));\necho \"\\n-- comparison function taking too many parameters --\\n\";\nfunction too_many_parameters ($val1, $val2, $val3) {\n  return 1;\n}\ntry {\n    var_dump(array_uintersect_uassoc($arr1, $arr2, 'too_many_parameters', 'too_many_parameters'));\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"\\n-- comparison function taking too few parameters --\\n\";\nfunction too_few_parameters ($val1) {\n  return 1;\n}\nvar_dump(array_uintersect_uassoc($arr1, $arr2, 'too_few_parameters', 'too_few_parameters'));\n?>")).toMatchSnapshot();
  });
});
