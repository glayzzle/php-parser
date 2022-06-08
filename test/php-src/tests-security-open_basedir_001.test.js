// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_001.phpt
  it("openbase_dir runtime hardening", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_set(\"open_basedir\", \"/usr/local/bin\"));\nvar_dump(ini_get(\"open_basedir\"));\nvar_dump(ini_set(\"open_basedir\", \"/usr\"));\nvar_dump(ini_get(\"open_basedir\"));\n?>")).toMatchSnapshot();
  });
});
