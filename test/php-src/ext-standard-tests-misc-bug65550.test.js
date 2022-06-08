// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/bug65550.phpt
  it("Bug #65550 (get_browser() incorrectly parses entries with \"+\" sign)", function () {
    expect(parser.parseCode("<?php\n$user_agent = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/522+ (KHTML, like Gecko, Safari/522) OmniWeb/v613';\n$caps = get_browser($user_agent, true);\nvar_dump($caps['browser'], $caps['version']);\n?>")).toMatchSnapshot();
  });
});
