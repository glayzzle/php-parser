// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/ini_set.phpt
  it("Phar: test ini_set with readonly and require_hash enabled", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_set('phar.require_hash', 1));\nvar_dump(ini_set('phar.readonly', 1));\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\nvar_dump(ini_set('phar.require_hash', 0));\nvar_dump(ini_set('phar.readonly', 0));\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\n__HALT_COMPILER();\n?>")).toMatchSnapshot();
  });
});
