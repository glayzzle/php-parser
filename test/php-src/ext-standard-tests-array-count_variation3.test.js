// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/count_variation3.phpt
  it("Test count() function : usage variations - Infinitely recursive array", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass count() an infinitely recursive array as $var argument\n * This will stop the script before it reaches the end.\n */\necho \"*** Testing count() : usage variations ***\\n\";\n$array1 = array (1, 2, 'three');\n// get an infinitely recursive array\n$array1[] = &$array1;\necho \"\\n-- \\$mode not set: --\\n\";\nvar_dump(count ($array1));\necho \"\\n-- \\$mode = 1: --\\n\";\nvar_dump(count ($array1, 1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
