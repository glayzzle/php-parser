// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/001.phpt
  it("version string", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\nvar_dump(`$php -n -v`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
