// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug46408.phpt
  it("Bug #46408 (Locale number format settings can cause pg_query_params to break with numerics)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = pg_connect($conn_str);\nsetlocale(LC_ALL, \"de\", \"de_DE\", \"de_DE.ISO8859-1\", \"de_DE.ISO_8859-1\", \"de_DE.UTF-8\");\necho 3.5 , \"\\n\";\npg_query_params($dbh, \"SELECT $1::numeric\", array(3.5));\npg_close($dbh);\necho \"Done\".PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
