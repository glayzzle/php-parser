// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/putenv_bug75574_cp936_win.phpt
  it("Bug #75574 putenv does not work properly if parameter contains non-ASCII unicode character, cp936 Windows", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp936\n#vim: set encoding=cp936\n*/\nvar_dump(putenv('FOO=��'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=����'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=������'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��������'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a��'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a��a'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a��a��'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a����'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a������'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=��a��������'), getenv(\"FOO\"));\n?>")).toMatchSnapshot();
  });
});
