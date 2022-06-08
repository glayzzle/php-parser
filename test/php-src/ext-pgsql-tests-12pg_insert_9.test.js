// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/12pg_insert_9.phpt
  it("PostgreSQL pg_insert() (9.0+)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\npg_query($db, \"SET standard_conforming_strings = 0\");\n$fields = array('num'=>'1234', 'str'=>'AAA', 'bin'=>'BBB');\npg_insert($db, $table_name, $fields) or print \"Error in test 1\\n\";\necho pg_insert($db, $table_name, $fields, PGSQL_DML_STRING).\"\\n\";\necho pg_insert($db, $table_name, $fields, PGSQL_DML_STRING|PGSQL_DML_ESCAPE).\"\\n\";\nvar_dump( pg_insert($db, $table_name, $fields, PGSQL_DML_EXEC) );\n/* Invalid values */\ntry {\n    $converted = pg_insert($db, $table_name, [5 => 'AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_insert($db, $table_name, ['AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_insert($db, $table_name, ['num' => []]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_insert($db, $table_name, ['num' => new stdClass()]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_insert($db, $table_name, ['num' => $db]);\n    var_dump($converted);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
