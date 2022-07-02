// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug73058.phpt
  it("Bug #73058 crypt broken when salt is 'too' long", function () {
    expect(parser.parseCode("<?php\n$pass = 'secret';\n$salt = '$2y$07$usesomesillystringforsalt$';\nvar_dump(crypt($pass, $salt));\n$salt = '$2y$07$usesomesillystringforsaltzzzzzzzzzzzzz$';\nvar_dump(crypt($pass, $salt));\n$salt = '$2y$07$usesomesillystringforx';\nvar_dump(crypt($pass, $salt));\n?>\n==OK==")).toMatchSnapshot();
  });
});
