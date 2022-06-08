// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug55478.phpt
  it("Bug #55478 (FILTER_VALIDATE_EMAIL fails with internationalized domain name addresses containing >1 -)", function () {
    expect(parser.parseCode("<?php\n$email_address = \"test@xn--example--7za.de\"; // \"example-ä.de\"\nvar_dump(filter_var($email_address, FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
