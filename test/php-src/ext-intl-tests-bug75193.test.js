// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug75193.phpt
  it("Bug #75193 segfault in collator_convert_object_to_string", function () {
    expect(parser.parseCode("<?php\n$a = new \\Collator('en_US');\n$b = [new stdclass, new stdclass];\nvar_dump($a->sort($b));\n?>")).toMatchSnapshot();
  });
});
