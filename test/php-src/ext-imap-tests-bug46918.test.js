// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug46918.phpt
  it("Bug #46918 (imap_rfc822_parse_adrlist host part not filled in correctly)", function () {
    expect(parser.parseCode("<?php\n$adds = 'ian eiloart <iane@example.ac.uk>,\n      shuf6@example.ac.uk,\n      blobby,\n      \"ian,eiloart\"<ian@example.ac.uk>,\n      <@example.com:foo@example.ac.uk>,\n      foo@#,\n      ian@-example.com,\n      ian@one@two';\n$add_arr = imap_rfc822_parse_adrlist($adds, 'example.com');\nvar_export($add_arr);\n?>")).toMatchSnapshot();
  });
});
