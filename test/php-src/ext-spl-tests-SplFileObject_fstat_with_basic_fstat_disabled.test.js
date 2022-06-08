// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fstat_with_basic_fstat_disabled.phpt
  it("SplFileObject::fstat when fstat() has been disabled.", function () {
    expect(parser.parseCode("<?php\n$obj = New SplFileObject(__DIR__.'/SplFileObject_testinput.csv');\nvar_dump($obj->fstat());\n?>")).toMatchSnapshot();
  });
});
