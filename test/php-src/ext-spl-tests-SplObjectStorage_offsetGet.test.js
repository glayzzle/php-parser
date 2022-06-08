// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_offsetGet.phpt
  it("Standard success for SplObjectStorage::offsetGet", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\n$o1 = new stdClass();\n$s[$o1] = 'some_value';\necho $s->offsetGet($o1);\n?>")).toMatchSnapshot();
  });
});
