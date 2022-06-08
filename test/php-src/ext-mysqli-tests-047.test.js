// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/047.phpt
  it("mysqli_stmt_result_metadata", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_affected\");\n    mysqli_query($link, \"CREATE TABLE test_affected (foo int, bar varchar(10) character set latin1) ENGINE=\" . $engine);\n    mysqli_query($link, \"INSERT INTO test_affected VALUES (1, 'Zak'),(2, 'Greant')\");\n    $stmt = mysqli_prepare($link, \"SELECT * FROM test_affected\");\n    mysqli_stmt_execute($stmt);\n    $result = mysqli_stmt_result_metadata($stmt);\n    echo \"\\n=== fetch_fields ===\\n\";\n    var_dump(mysqli_fetch_fields($result));\n    echo \"\\n=== fetch_field_direct ===\\n\";\n    var_dump(mysqli_fetch_field_direct($result, 0));\n    var_dump(mysqli_fetch_field_direct($result, 1));\n    echo \"\\n=== fetch_field ===\\n\";\n    while ($field = mysqli_fetch_field($result)) {\n        var_dump($field);\n    }\n    print_r(mysqli_fetch_lengths($result));\n    mysqli_free_result($result);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_affected\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
