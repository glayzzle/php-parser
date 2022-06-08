// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/open_basedir_cwd_resolve.phpt
  it("CWD on open_basedir should not imply that everything is accessible", function () {
    expect(parser.parseCode("<?php\n$cwd = getcwd();\nini_set('open_basedir', $cwd);\nvar_dump(file_get_contents('/some/path/outside/open/basedir'));\n?>")).toMatchSnapshot();
  });
});
