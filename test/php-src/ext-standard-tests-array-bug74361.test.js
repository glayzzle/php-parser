// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug74361.phpt
  it("Bug #74361: Compaction in array_rand() violates COW", function () {
    expect(parser.parseCode("<?php\n$array = [4 => 4];\nvar_dump(array_rand($array));\n?>")).toMatchSnapshot();
  });
});
