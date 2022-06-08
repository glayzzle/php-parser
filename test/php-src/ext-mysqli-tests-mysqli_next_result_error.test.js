// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_next_result_error.phpt
  it("Error in multi query", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/connect.inc';\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket);\n$mysqli->multi_query(\"SELECT 1; SELECT 2; Syntax Error\");\ntry {\n    do {\n        if ($res = $mysqli->store_result()) {\n            var_dump($res->fetch_all(MYSQLI_ASSOC));\n            $res->free();\n        }\n    } while ($mysqli->more_results() && $mysqli->next_result());\n} catch (mysqli_sql_exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$mysqli->query(\"DROP PROCEDURE IF EXISTS p\");\n$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT 1; SELECT foobar FROM table_that_does_not_exist; END;');\n$stmt = $mysqli->prepare(\"CALL p()\");\n$stmt->execute();\ntry {\n    do {\n        $stmt->bind_result($num);\n        while ($stmt->fetch()) {\n            echo \"num = $num\\n\";\n        }\n    } while ($stmt->more_results() && $stmt->next_result());\n} catch (mysqli_sql_exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$mysqli->query(\"DROP PROCEDURE IF EXISTS p\");\n?>")).toMatchSnapshot();
  });
});
