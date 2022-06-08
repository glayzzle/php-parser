// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug55582.phpt
  it("Bug #55582 mysqli_num_rows() returns always 0 for unbuffered, when mysqlnd is used", function () {
    expect(parser.parseCode("<?php\n    include \"connect.inc\";\n    if (!($link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))) {\n        printf(\"[001] Cannot connect to the server\");\n    }\n    var_dump($link->real_query(\"SELECT 1\"));\n    $res = $link->use_result();\n    try {\n        var_dump(mysqli_num_rows($res));\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($res->fetch_assoc());\n    try {\n        var_dump(mysqli_num_rows($res));\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($res->fetch_assoc());\n    var_dump(mysqli_num_rows($res));\n    $link->close();\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
