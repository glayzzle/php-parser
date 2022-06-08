// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug62046.phpt
  it("Bug #62046 \tmysqli@mysqlnd can't iterate over stored sets after call to mysqli_stmt_reset()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    if (FALSE === ($stmt = $link->prepare('SELECT 42'))) {\n        printf(\"[002] Prepare failed, [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    if (FALSE === $stmt->execute()) {\n        printf(\"[003] Execute failed, [%d] %s\\n\", $stmt->errorno, $stmt->error);\n    }\n    if (FALSE === $stmt->store_result()) {\n        printf(\"[004] store_result failed, [%d] %s\\n\", $stmt->errorno, $stmt->error);\n    }\n    $one = NULL;\n    if (FALSE === $stmt->bind_result($one)) {\n        printf(\"[005] bind_result failed, [%d] %s\\n\", $stmt->errorno, $stmt->error);\n    }\n    if (FALSE === $stmt->reset()) {\n        printf(\"[006] bind_result failed, [%d] %s\\n\", $stmt->errorno, $stmt->error);\n    }\n    while ($stmt->fetch()) {\n        var_dump($one);\n    }\n    $stmt->close();\n    $link->close();\n    echo \"done!\";\n?>")).toMatchSnapshot();
  });
});
