// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug42548.phpt
  it("Bug #42548 PROCEDURE xxx can't return a result set in the given context (works in 5.2.3!!)", function () {
    expect(parser.parseCode("<?php\nrequire_once('connect.inc');\n$mysqli = mysqli_init();\n$mysqli->real_connect($host, $user, $passwd, $db, $port, $socket);\nif (mysqli_connect_errno()) {\n    printf(\"Connect failed: %s\\n\", mysqli_connect_error());\n    exit();\n}\n$mysqli->query(\"DROP PROCEDURE IF EXISTS p1\") or die($mysqli->error);\n$mysqli->query(\"CREATE PROCEDURE p1() BEGIN SELECT 23; SELECT 42; END\") or die($mysqli->error);\nif ($mysqli->multi_query(\"CALL p1();\"))\n{\n    do\n    {\n        if ($objResult = $mysqli->store_result()) {\n            while ($row = $objResult->fetch_assoc()) {\n                print_r($row);\n            }\n            $objResult->close();\n            if ($mysqli->more_results()) {\n                print \"----- next result -----------\\n\";\n            }\n        } else {\n            print \"no results found\\n\";\n        }\n    } while ($mysqli->more_results() && $mysqli->next_result());\n} else {\n    print $mysqli->error;\n}\n$mysqli->query(\"DROP PROCEDURE p1\") or die($mysqli->error);\n$mysqli->close();\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
