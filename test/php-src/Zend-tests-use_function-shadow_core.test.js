// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/shadow_core.phpt
  it("shadowing a global core function with a local version", function () {
    expect(parser.parseCode("<?php\nrequire 'includes/foo_strlen.inc';\nuse function foo\\strlen;\nvar_dump(strlen('foo bar baz'));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
