// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74892.phpt
  it("Bug #74892 Url Rewriting (trans_sid) not working on urls that start with #", function () {
    expect(parser.parseCode("<?php\nini_set('session.use_cookies', '0');\nini_set('session.use_only_cookies',0);\nini_set('session.use_trans_sid',1);\nini_set('session.trans_sid_hosts','php.net');\nsession_id('sessionidhere');\nsession_start();\n?>\n<p><a href=\"index.php\">Click This Anchor Tag!</a></p>\n<p><a href=\"index.php#place\">External link with anchor</a></p>\n<p><a href=\"http://php.net#foo\">External link with anchor 2</a></p>\n<p><a href=\"#place\">Internal link</a></p>")).toMatchSnapshot();
  });
});
