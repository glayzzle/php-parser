// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/10pg_convert_9.phpt
  it("PostgreSQL pg_convert() (9.0+)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\npg_query($db, \"SET standard_conforming_strings = 0\");\n$fields = array('num'=>'1234', 'str'=>'AAA', 'bin'=>'BBB');\n$converted = pg_convert($db, $table_name, $fields);\nvar_dump($converted);\n/* Invalid values */\ntry {\n    $converted = pg_convert($db, $table_name, [5 => 'AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_convert($db, $table_name, ['AAA']);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_convert($db, $table_name, ['num' => []]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_convert($db, $table_name, ['num' => new stdClass()]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    $converted = pg_convert($db, $table_name, ['num' => $db]);\n    var_dump($converted);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
