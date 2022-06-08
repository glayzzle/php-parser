// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug64482.phpt
  it("Bug #64482 (Opcodes for dynamic includes should not be cached)", function () {
    expect(parser.parseCode("<?php\ninclude 'bug64482.inc';\necho \"\\n\";\ninclude 'php://filter/read=string.toupper/resource=bug64482.inc';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
