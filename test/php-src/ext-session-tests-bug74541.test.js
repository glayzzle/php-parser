// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74541.phpt
  it("Bug #74541 Wrong reflection on session_start()", function () {
    expect(parser.parseCode("<?php\n$r = new ReflectionFunction('session_start');\nvar_dump($r->getNumberOfParameters());\nvar_dump($r->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
