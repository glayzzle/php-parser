// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/dbversion.phpt
  it("PDO_DBLIB: \\PDO::DBLIB_ATTR_VERSION exposes a string", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$version = $db->getAttribute(PDO::DBLIB_ATTR_VERSION);\nvar_dump(is_string($version) && strlen($version));\n?>")).toMatchSnapshot();
  });
});
