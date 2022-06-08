// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug50772.phpt
  it("Bug #50772 (mysqli constructor without parameters does not return a working mysqli object)", function () {
    expect(parser.parseCode("<?php\n    include \"connect.inc\";\n    $db1 = new mysqli();\n    // These calls fail\n    $db1->options(MYSQLI_OPT_CONNECT_TIMEOUT, 3);\n    my_mysqli_real_connect($db1, $host, $user, $passwd, $db, $port, $socket);\n    if(mysqli_connect_error()) {\n        echo \"error 1\\n\";\n    } else {\n        echo \"ok 1\\n\";\n    }\n    $db2 = mysqli_init();\n    $db2->options(MYSQLI_OPT_CONNECT_TIMEOUT, 3);\n    my_mysqli_real_connect($db2, $host, $user, $passwd, $db, $port, $socket);\n    if(mysqli_connect_error()) {\n        echo \"error 2\\n\";\n    } else {\n        echo \"ok 2\\n\";\n    }\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
