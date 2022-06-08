// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug44445.phpt
  it("Bug #44445 (email validator does not handle domains starting/ending with a -)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"foo@-foo.com\",FILTER_VALIDATE_EMAIL));\nvar_dump(filter_var(\"foo@foo-.com\",FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
