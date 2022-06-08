// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug81142.phpt
  it("Bug #81142 (memory leak when unserialize()ing associative array)", function () {
    expect(parser.parseCode("<?php\n$mem0 = memory_get_usage();\n$ctr = 0;\nunserialize(serialize([\"foo_$ctr\" => 1]));\n$mem1 = memory_get_usage();\nvar_dump($mem1 - $mem0);\n?>")).toMatchSnapshot();
  });
});
