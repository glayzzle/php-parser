// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug32223b.phpt
  it("Bug #32223 (weird behaviour of pg_last_notice using define)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\nrequire_once('lcmess.inc');\n$dbh = pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\n_set_lc_messages($dbh);\n$res = pg_query($dbh, \"CREATE OR REPLACE FUNCTION test_notice() RETURNS boolean AS '\nbegin\n        RAISE NOTICE ''11111'';\n        return ''f'';\nend;\n' LANGUAGE plpgsql;\");\n$res = pg_query($dbh, 'SET client_min_messages TO NOTICE;');\nvar_dump($res);\nfunction tester($dbh) {\n        $res = pg_query($dbh, 'SELECT test_notice()');\n        $row = pg_fetch_row($res, 0);\n        var_dump($row);\n        pg_free_result($res);\n        if ($row[0] == 'f')\n        {\n                var_dump(pg_last_notice($dbh));\n        }\n}\ntester($dbh);\npg_close($dbh);\n?>")).toMatchSnapshot();
  });
});
