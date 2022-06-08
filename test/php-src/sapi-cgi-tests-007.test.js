// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/007.phpt
  it("invalid arguments and error messages", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\nvar_dump(`\"$php\" -n -f some.php -f some.php`);\nvar_dump(`\"$php\" -n -s -w -l`);\n?>")).toMatchSnapshot();
  });
});
