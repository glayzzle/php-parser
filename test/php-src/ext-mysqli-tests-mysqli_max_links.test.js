// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_max_links.phpt
  it("Testing mysqli.max_links", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require_once(\"table.inc\");\n    // to make sure we have at least one working connection...\n    var_dump(mysqli_ping($link));\n    // to make sure that max_links is really set to one\n    var_dump((int)ini_get('mysqli.max_links'));\n    $links = array();\n    for ($i = 1; $i <= 5; $i++)\n        if ($links[$i] = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n            printf(\"[%03d] One link is already open, it should not be possible to open more, [%d] %s, [%d] %s\\n\",\n                $i, mysqli_connect_errno(), mysqli_connect_error(),\n                mysqli_errno($links[$i]), mysqli_error($links[$i]));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
