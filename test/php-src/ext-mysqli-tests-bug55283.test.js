// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug55283.phpt
  it("Bug #55283 (SSL options set by mysqli_ssl_set ignored for MySQLi persistent connections)", function () {
    expect(parser.parseCode("<?php\n    require_once \"connect.inc\";\n    $db1 = new mysqli();\n    $flags = MYSQLI_CLIENT_SSL | MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT;\n    $link = mysqli_init();\n    mysqli_ssl_set($link, null, null, null, null, \"AES256-SHA\");\n    if (my_mysqli_real_connect($link, 'p:' . $host, $user, $passwd, $db, $port, null, $flags)) {\n        $r = $link->query(\"SHOW STATUS LIKE 'Ssl_cipher'\");\n        var_dump($r->fetch_row());\n    }\n    /* non-persistent connection */\n    $link2 = mysqli_init();\n    mysqli_ssl_set($link2, null, null, null, null, \"AES256-SHA\");\n    if (my_mysqli_real_connect($link2, $host, $user, $passwd, $db, $port, null, $flags)) {\n        $r2 = $link2->query(\"SHOW STATUS LIKE 'Ssl_cipher'\");\n        var_dump($r2->fetch_row());\n    }\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
