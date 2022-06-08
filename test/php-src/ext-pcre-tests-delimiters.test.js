// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/delimiters.phpt
  it("Delimiters crash test", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('', ''));\nvar_dump(preg_match('      ', ''));\nvar_dump(preg_match('@@', ''));\nvar_dump(preg_match('12', ''));\nvar_dump(preg_match('<>', ''));\nvar_dump(preg_match('~a', ''));\nvar_dump(preg_match('@\\@\\@@', '@@'));\nvar_dump(preg_match('//z', '@@'));\nvar_dump(preg_match('{', ''));\n?>")).toMatchSnapshot();
  });
});
