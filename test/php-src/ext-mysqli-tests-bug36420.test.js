// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug36420.phpt
  it("Bug #36420 (segfault when access result->num_rows after calling result->close())", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$result = $mysqli->query('select 1');\n$result->close();\ntry {\n    $result->num_rows;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$mysqli->close();\ntry {\n    $result->num_rows;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
