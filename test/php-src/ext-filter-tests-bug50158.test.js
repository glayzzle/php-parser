// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug50158.phpt
  it("Bug #50158 (FILTER_VALIDATE_EMAIL fails with valid addresses containing = or ?)", function () {
    expect(parser.parseCode("<?php\n$email_address = \"test=mail@example.com\";\nvar_dump(filter_var($email_address, FILTER_VALIDATE_EMAIL));\n$email_address = \"test-mail@example.com\";\nvar_dump(filter_var($email_address, FILTER_VALIDATE_EMAIL));\n$email_address = \"test+mail@example.com\";\nvar_dump(filter_var($email_address, FILTER_VALIDATE_EMAIL));\n$email_address = \"test?mail@example.com\";\nvar_dump(filter_var($email_address, FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
