// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/shadow_core.phpt
  it("shadowing a global core constant with a local version", function () {
    expect(parser.parseCode("<?php\nrequire 'includes/foo_php_version.inc';\nuse const foo\\PHP_VERSION;\nvar_dump(PHP_VERSION);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
