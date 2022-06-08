// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug63398.phpt
  it("Bug #63398 (Segfault when polling closed link)", function () {
    expect(parser.parseCode("<?php\nrequire 'connect.inc';\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\nmysqli_close($link);\n$read = $error = $reject = array();\n$read[] = $error[] = $reject[] = $link;\ntry {\n    mysqli_poll($read, $error, $reject, 1);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
