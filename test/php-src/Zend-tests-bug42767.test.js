// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42767.phpt
  it("Bug #42767 (highlight_string() truncates trailing comments)", function () {
    expect(parser.parseCode("<?php\nhighlight_string('<?php /*some comment..');\n?>")).toMatchSnapshot();
  });
});
