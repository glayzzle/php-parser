// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug71974.phpt
  it("Bug #71974 Trans sid will always be send, even if cookies are available", function () {
    expect(parser.parseCode("<?php\nob_start();\nsession_start()\n?>\n<a href=\"some.php\">abc</a>")).toMatchSnapshot();
  });
});
