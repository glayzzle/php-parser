// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation11.phpt
  it("Test array_slice() function : usage variations - array has holes in buckets", function () {
    expect(parser.parseCode("<?php\n/*\n * Check that results of array_slice are correct when there are holes in buckets caused by unset()\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\nfunction dump_slice(array $input, $offsetToUnset, int $offset, int $length) {\n    unset($input[$offsetToUnset]);\n    var_dump(array_slice($input, $offset, $length));\n}\necho \"\\n-- Call array_slice() on array with string keys--\\n\";\n$input = ['one' => 'un', 'two' => 'deux', 23 => 'twenty-three', 'zero'];\ndump_slice($input, 'two', 0, 1);\ndump_slice($input, 'two', 0, 2);\ndump_slice($input, 'two', 0, 3);\ndump_slice($input, 23, 1, 2);\necho \"\\n-- Call array_slice() on array with packed keys--\\n\";\n$input = [10, 11, 12, 'thirteen'];\ndump_slice($input, 0, 0, 1);\ndump_slice($input, 1, 0, 1);\ndump_slice($input, 1, 0, 3);\ndump_slice($input, 1, -1, 1);\ndump_slice($input, 1, 0, 3);\ndump_slice($input, 1, -3, 3);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
