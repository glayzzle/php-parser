// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug81101.phpt
  it("Bug #81101 - Invalid single character repetition issues in JIT", function () {
    expect(parser.parseCode("<?php\n$matches = [];\n$test = ' App\\Domain\\Repository\\MetaData\\SomethingRepositoryInterface';\npreg_match('/\\\\\\\\([^\\\\\\\\]+)\\s*$/', $test, $matches);\nvar_dump($matches);\n$test2 = ' App\\Domain\\Exception\\NotFoundException';\npreg_match('/\\\\\\\\([^\\\\\\\\]+)\\s*$/', $test2, $matches);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
