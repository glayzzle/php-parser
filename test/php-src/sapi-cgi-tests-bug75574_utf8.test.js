// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug75574_utf8.phpt
  it("Bug #75574 putenv does not work properly if parameter contains non-ASCII unicode character, UTF-8", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=utf-8\n#vim: set encoding=utf-8\n*/\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$fn = __DIR__ . DIRECTORY_SEPARATOR . md5(uniqid());\nfile_put_contents($fn, \"<?php\\nvar_dump(putenv('FOO=啊'));\\n//var_dump(`echo %FOO%`);\\nvar_dump(getenv('FOO'));\");\necho shell_exec(\"$php -n -f $fn\");\nunlink($fn);\n?>")).toMatchSnapshot();
  });
});
