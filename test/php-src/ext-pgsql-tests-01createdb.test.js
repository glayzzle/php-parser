// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/01createdb.phpt
  it("PostgreSQL create db", function () {
    expect(parser.parseCode("<?php\n// create test table\ninclude('config.inc');\n$db = pg_connect($conn_str);\nif (!($q = @pg_query($db, \"SELECT * FROM \".$table_name)) || !@pg_num_rows($q))\n{\n    pg_query($db,$table_def); // Create table here\n    for ($i=0; $i < $num_test_record; $i++) {\n        pg_query($db,\"INSERT INTO \".$table_name.\" VALUES ($i, 'ABC');\");\n    }\n}\nelse {\n    echo pg_last_error().\"\\n\";\n}\n$v = pg_version($db);\nif (version_compare($v['server'], '9.2', '>=') && (!($q = @pg_query($db, \"SELECT * FROM \".$table_name_92)) || !@pg_num_rows($q)))\n{\n    pg_query($db,$table_def_92); // Create table here\n}\nelse {\n    echo pg_last_error().\"\\n\";\n}\n// Create view here\npg_query($db,$view_def);\npg_close($db);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
