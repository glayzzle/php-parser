// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug55798.phpt
  it("Bug #55798 (serialize followed by unserialize with numeric object prop. gives integer prop)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$a->{0} = 'X';\n$a->{1} = 'Y';\nvar_dump(serialize($a));\nvar_dump($a->{0});\n$b = unserialize(serialize($a));\nvar_dump(serialize($b));\nvar_dump($b->{0});\n?>")).toMatchSnapshot();
  });
});
