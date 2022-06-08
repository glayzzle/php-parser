// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug27597.phpt
  it("Bug #27597 (pg_fetch_array not returning false)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\n@pg_query($dbh, \"DROP TABLE id\");\npg_query($dbh, \"CREATE TABLE id (id INT)\");\nfor ($i=0; $i<4; $i++) {\n    pg_query($dbh, \"INSERT INTO id (id) VALUES ($i)\");\n}\nfunction xi_fetch_array($res, $type = PGSQL_ASSOC) {\n    $a = pg_fetch_array($res, NULL, $type) ;\n    return $a ;\n}\n$res = pg_query($dbh, \"SELECT * FROM id\");\n$i = 0; // endless-loop protection\nwhile($row = xi_fetch_array($res)) {\n    print_r($row);\n    if ($i++ > 4) {\n        echo \"ENDLESS-LOOP\";\n        exit(1);\n    }\n}\npg_close($dbh);\n?>")).toMatchSnapshot();
  });
});
