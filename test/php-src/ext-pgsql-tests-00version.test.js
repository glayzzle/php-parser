// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/00version.phpt
  it("PostgreSQL version", function () {
    expect(parser.parseCode("<?php\n// Get postgresql version for easier debugging.\n// Execute run-test.php with --keep-all to get version string in 00version.log or 00version.out\ninclude('config.inc');\n$db = pg_connect($conn_str);\nvar_dump(pg_version($db));\npg_close($db);\n// Get environment vars for debugging\nvar_dump(serialize($_ENV));\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
