// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_error.phpt
  it("Test array_fill() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_fill() : error conditions ***\\n\";\n// calling array_fill with negative values for 'num' parameter\n$start_key = 0;\n$num = -1;\n$val = 1;\ntry {\n    var_dump( array_fill($start_key,$num,$val) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
