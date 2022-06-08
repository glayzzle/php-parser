// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/98old_api.phpt
  it("PostgreSQL old api", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$result = pg_exec($db, \"SELECT * FROM \".$table_name);\npg_numrows($result);\npg_numfields($result);\npg_fieldname($result, 0);\npg_fieldsize($result, 0);\npg_fieldtype($result, 0);\npg_fieldprtlen($result, 0);\npg_fieldisnull($result, 0);\npg_result($result,0,0);\n$result = pg_exec($db, \"INSERT INTO \".$table_name.\" VALUES (7777, 'KKK')\");\n$oid = pg_getlastoid($result);\npg_freeresult($result);\npg_errormessage($db);\n$result = pg_exec($db, \"UPDATE \".$table_name.\" SET str = 'QQQ' WHERE str like 'RGD';\");\npg_cmdtuples($result);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
