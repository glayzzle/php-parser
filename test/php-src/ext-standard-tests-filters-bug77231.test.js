// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug77231.phpt
  it("Bug #77231 (Segfault when using convert.quoted-printable-encode filter)", function () {
    expect(parser.parseCode("<?php\nvar_dump(file(urldecode('php://filter/convert.quoted-printable-encode/resource=data://,%bfAAAAAAAAFAAAAAAAAAAAAAA%ff%ff%ff%ff%ff%ff%ff%ffAAAAAAAAAAAAAAAAAAAAAAAA')));\n?>")).toMatchSnapshot();
  });
});
