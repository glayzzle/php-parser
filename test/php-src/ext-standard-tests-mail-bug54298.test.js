// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug54298.phpt
  it("Bug #54298 (Using empty additional_headers adding extraneous CRLF)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mail('someuser@example.com', 'testsubj', 'Body part', ''));\necho file_get_contents('bug54298.eml');\n?>")).toMatchSnapshot();
  });
});
