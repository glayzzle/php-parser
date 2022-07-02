// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation8.phpt
  it("Test array_change_key_case() function : usage variations - Different strings as keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_change_key_case() behaves with different strings\n */\necho \"*** Testing array_change_key_case() : usage variations ***\\n\";\n$inputs = array (\n    // group of escape sequences\n    array(null => 1, NULL => 2, \"\\a\" => 3, \"\\cx\" => 4, \"\\e\" => 5, \"\\f\" => 6, \"\\n\" => 7, \"\\t\" => 8, \"\\xhh\" => 9, \"\\ddd\" => 10, \"\\v\" => 11),\n    // array contains combination of capital/small letters\n    array(\"lemoN\" => 1, \"Orange\" => 2, \"banana\" => 3, \"apple\" => 4, \"Test\" => 5, \"TTTT\" => 6, \"ttt\" => 7, \"ww\" => 8, \"x\" => 9, \"X\" => 10, \"oraNGe\" => 11, \"BANANA\" => 12)\n);\nforeach($inputs as $input) {\n    echo \"\\n-- \\$case = default --\\n\";\n    var_dump(array_change_key_case($input));\n    echo \"-- \\$case = upper --\\n\";\n    var_dump(array_change_key_case($input, CASE_UPPER));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
