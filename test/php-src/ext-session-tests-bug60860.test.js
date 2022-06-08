// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug60860.phpt
  it("Bug #60860 (session.save_handler=user without defined function core dumps)", function () {
    expect(parser.parseCode("<?php\nsession_start();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
