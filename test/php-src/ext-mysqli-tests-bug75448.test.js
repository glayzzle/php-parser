// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug75448.phpt
  it("mysqli_prepare() called on a closed connection should return FALSE (bug #75448)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'connect.inc';\n$link = mysqli_connect($host, $user, $passwd, $db, $port, $socket);\nmysqli_close($link);\ntry {\n    mysqli_prepare($link, 'SELECT VERSION()');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
