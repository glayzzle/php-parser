// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/005-win32.phpt
  it("using invalid combinations of cmdline options", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\nvar_dump(`$php -n -a -f \"wrong\"`);\nvar_dump(`$php -n -f \"wrong\" -a`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
