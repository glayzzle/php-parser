// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug36802.phpt
  it("Bug #36802 (crashes with with mysqli_set_charset())", function () {
    expect(parser.parseCode("<?php\n    class really_my_mysqli extends mysqli {\n        function __construct()\n        {\n        }\n    }\n    require_once(\"connect.inc\");\n    $mysql = mysqli_init();\n    /* following operations should not work */\n    if (method_exists($mysql, 'set_charset')) {\n        try {\n            $mysql->set_charset('utf8');\n        } catch (Error $exception) {\n            echo $exception->getMessage() . \"\\n\";\n        }\n    } else {\n        $x[0] = false;\n    }\n    try {\n        $mysql->query(\"SELECT 'foo' FROM DUAL\");\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    /* following operations should work */\n    $x[1] = ($mysql->error);\n    $x[2] = $mysql->errno;\n    $mysql->close();\n    var_dump($x);\n?>")).toMatchSnapshot();
  });
});
