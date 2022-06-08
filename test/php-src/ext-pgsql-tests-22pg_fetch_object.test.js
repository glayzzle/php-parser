// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/22pg_fetch_object.phpt
  it("PostgreSQL pg_fetch_object()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\nclass test_class {\n    function __construct($arg1, $arg2) {\n        echo __METHOD__ . \"($arg1,$arg2)\\n\";\n    }\n}\n$db = pg_connect($conn_str);\n$sql = \"SELECT * FROM $table_name WHERE num = 0\";\n$result = pg_query($db, $sql) or die('Cannot query db');\n$rows = pg_num_rows($result);\nvar_dump(pg_fetch_object($result, NULL, 'test_class', array(1, 2)));\ntry {\n    var_dump(pg_fetch_object($result, NULL, 'does_not_exist'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
