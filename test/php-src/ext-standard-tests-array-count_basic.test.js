// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/count_basic.phpt
  it("Test count() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of count() using an array as $var argument\n * and different values as $mode argument.\n */\necho \"*** Testing count() : basic functionality ***\\n\";\necho \"\\n-- One Dimensional Array: --\\n\";\n$array = array('zero', 'one', 'two');\nvar_dump(count($array));\necho \"\\n-- Two Dimensional Array: --\\n\";\n$array_multi = array('zero', array(1, 2, 3), 'two');\necho \"\\$mode = COUNT_NORMAL:    \";\nvar_dump(count($array_multi, COUNT_NORMAL));\necho \"\\$mode = 0:               \";\nvar_dump(count($array_multi, 0));\necho \"\\$mode = COUNT_RECURSIVE: \";\nvar_dump(count($array_multi, COUNT_RECURSIVE));\necho \"\\$mode = 1:               \";\nvar_dump(count($array_multi, 1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
