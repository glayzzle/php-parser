// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug74170.phpt
  it("Bug #74170 locale information change after mime_content_type", function () {
    expect(parser.parseCode("<?php\nvar_dump(setlocale(LC_CTYPE, 'ru_RU.koi8r'));\nvar_dump(nl_langinfo(CODESET));\nvar_dump(mime_content_type(__DIR__ . '/resources/test.ppt'));\nvar_dump(nl_langinfo(CODESET));\n?>")).toMatchSnapshot();
  });
});
