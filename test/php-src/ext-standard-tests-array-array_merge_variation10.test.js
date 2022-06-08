// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation10.phpt
  it("Test array_merge() function : usage variations - position of internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check the position of the internal array pointer after calling array_merge().\n * This test is also passing more than two arguments to array_merge().\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n$arr1 = array ('zero', 'one', 'two');\n$arr2 = array ('zero', 'un', 'deux');\n$arr3 = array ('null', 'eins', 'zwei');\necho \"\\n-- Call array_merge() --\\n\";\nvar_dump($result = array_merge($arr1, $arr2, $arr3));\necho \"\\n-- Position of Internal Pointer in Result: --\\n\";\necho key($result) . \" => \" . current($result) . \"\\n\";\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho \"\\$arr1: \";\necho key($arr1) . \" => \" . current ($arr1) . \"\\n\";\necho \"\\$arr2: \";\necho key($arr2) . \" => \" . current ($arr2) . \"\\n\";\necho \"\\$arr3: \";\necho key($arr3) . \" => \" . current ($arr3) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
