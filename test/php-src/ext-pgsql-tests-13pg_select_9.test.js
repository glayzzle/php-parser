// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/13pg_select_9.phpt
  it("PostgreSQL pg_select() (9.0+)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\npg_query($db, \"SET bytea_output = 'hex'\");\n$fields = array('num'=>'1234', 'str'=>'ABC', 'bin'=>'XYZ');\n$ids = array('num'=>'1234');\n$res = pg_select($db, $table_name, $ids) or print \"Error\\n\";\nvar_dump($res);\necho pg_select($db, $table_name, $ids, PGSQL_DML_STRING).\"\\n\";\necho pg_select($db, $table_name, $ids, PGSQL_DML_STRING|PGSQL_DML_ESCAPE).\"\\n\";\n/* Invalid values */\ntry {\n    $converted = pg_select($db, $table_name, [5 => 'AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_select($db, $table_name, ['AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_select($db, $table_name, ['num' => []]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_select($db, $table_name, ['num' => new stdClass()]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_select($db, $table_name, ['num' => $db]);\n    var_dump($converted);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
