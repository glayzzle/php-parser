// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug76850.phpt
  it("Bug #76850 Exit code mangled by set locale/preg_match", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n        $oldlocale = setlocale(LC_CTYPE, 0);\n        setlocale(LC_CTYPE, $oldlocale);\n}\nfoo();\nvar_dump(preg_match('/./', \"a\"));\n?>")).toMatchSnapshot();
  });
});
