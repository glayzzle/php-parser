// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_010.phpt
  it("SPL: SplObjectStorage null coalescing operator memory leak", function () {
    expect(parser.parseCode("<?php\n// In zts mode, this should no longer detect memory leaks for the objects\n$a = new stdClass();\n$b = new stdClass();\n$map = new SplObjectStorage();\n$map[$a] = 'foo';\nvar_dump($map[$b] ?? null);\nvar_dump($map[$a] ?? null);\n?>")).toMatchSnapshot();
  });
});
