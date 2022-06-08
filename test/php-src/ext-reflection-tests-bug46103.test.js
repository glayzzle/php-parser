// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug46103.phpt
  it("Bug #46103: ReflectionObject memory leak", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->r = new ReflectionObject($obj);\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
