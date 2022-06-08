// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/pg_insert_002.phpt
  it("PostgreSQL pg_insert() - test for CVE-2015-1532", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\nforeach (array('', '.', '..') as $table) {\n    try {\n        var_dump(pg_insert($conn, $table,  array('id' => 1, 'id2' => 1)));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>\nDone")).toMatchSnapshot();
  });
});
