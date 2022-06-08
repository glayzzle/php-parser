// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/09notice.phpt
  it("PostgreSQL notice function", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\ninclude 'lcmess.inc';\nini_set('pgsql.log_notice', TRUE);\nini_set('pgsql.ignore_notice', FALSE);\n$db = pg_connect($conn_str);\n_set_lc_messages($db);\n$res = pg_query($db, 'SET client_min_messages TO NOTICE;');\nvar_dump($res);\n// Get empty notice\nvar_dump(pg_last_notice($db));\nvar_dump(pg_last_notice($db, PGSQL_NOTICE_ALL));\npg_query($db, \"BEGIN;\");\npg_query($db, \"BEGIN;\");\npg_query($db, \"BEGIN;\");\npg_query($db, \"BEGIN;\");\n// Get notices\nvar_dump(pg_last_notice($db));\nvar_dump(pg_last_notice($db, PGSQL_NOTICE_ALL));\n// Clear and get notices\nvar_dump(pg_last_notice($db, PGSQL_NOTICE_CLEAR));\nvar_dump(pg_last_notice($db, PGSQL_NOTICE_LAST));\nvar_dump(pg_last_notice($db, PGSQL_NOTICE_ALL));\n// Invalid option\ntry {\n    var_dump(pg_last_notice($db, 99));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
