// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug51338.phpt
  it("Bug #51338 (URL-Rewriter should not get enabled if use_only_cookies is set to 1)", function () {
    expect(parser.parseCode("<?php\nsession_start();\nprint_r(ob_list_handlers());\n?>")).toMatchSnapshot();
  });
});
