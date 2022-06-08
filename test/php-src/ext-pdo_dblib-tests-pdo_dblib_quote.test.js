// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/pdo_dblib_quote.phpt
  it("PDO_DBLIB: Ensure quote function returns expected results", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nvar_dump($db->quote(true, PDO::PARAM_BOOL));\nvar_dump($db->quote(false, PDO::PARAM_BOOL));\nvar_dump($db->quote(42, PDO::PARAM_INT));\nvar_dump($db->quote(null, PDO::PARAM_NULL));\nvar_dump($db->quote('\\'', PDO::PARAM_STR));\nvar_dump($db->quote('foo', PDO::PARAM_STR));\nvar_dump($db->quote('foo', PDO::PARAM_STR | PDO::PARAM_STR_CHAR));\nvar_dump($db->quote('über', PDO::PARAM_STR | PDO::PARAM_STR_NATL));\nvar_dump($db->getAttribute(PDO::ATTR_DEFAULT_STR_PARAM) === PDO::PARAM_STR_CHAR);\n$db->setAttribute(PDO::ATTR_DEFAULT_STR_PARAM, PDO::PARAM_STR_NATL);\nvar_dump($db->getAttribute(PDO::ATTR_DEFAULT_STR_PARAM) === PDO::PARAM_STR_NATL);\nvar_dump($db->quote('foo', PDO::PARAM_STR | PDO::PARAM_STR_CHAR));\nvar_dump($db->quote('über', PDO::PARAM_STR));\nvar_dump($db->quote('über', PDO::PARAM_STR | PDO::PARAM_STR_NATL));\n$db = new PDO($dsn, $user, $pass, [PDO::ATTR_DEFAULT_STR_PARAM => PDO::PARAM_STR_NATL]);\nvar_dump($db->getAttribute(PDO::ATTR_DEFAULT_STR_PARAM) === PDO::PARAM_STR_NATL);\n?>")).toMatchSnapshot();
  });
});
