// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/putenv_bug75574_utf8.phpt
  it("Bug #75574 putenv does not work properly if parameter contains non-ASCII unicode character, UTF-8", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=utf-8\n#vim: set encoding=utf-8\n*/\nvar_dump(putenv('FOO=啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊啊啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊啊啊啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊a'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊a啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊啊啊'), getenv(\"FOO\"));\nvar_dump(putenv('FOO=啊a啊啊啊啊'), getenv(\"FOO\"));\n?>")).toMatchSnapshot();
  });
});
