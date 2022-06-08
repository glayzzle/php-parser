// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/key_canonicalization.phpt
  it("$GLOBALS should have canonicalized keys", function () {
    expect(parser.parseCode("<?php\n${1} = 42;\nvar_dump($GLOBALS[1]);\n?>")).toMatchSnapshot();
  });
});
