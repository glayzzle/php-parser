// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_basic-enus.phpt
  it("Gettext basic test with en_US locale that should be on nearly every system", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain (\"messages\", \"./locale\");\ntextdomain (\"messages\");\necho gettext(\"Basic test\"), \"\\n\";\necho _(\"Basic test\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
