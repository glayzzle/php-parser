// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_dcgettext.phpt
  it("Test dcgettext() functionality", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_MESSAGES=en_US.UTF-8');\nsetlocale(LC_MESSAGES, 'en_US.UTF-8');\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain('dngettextTest', './locale');\nvar_dump(dcgettext('dngettextTest', 'item', LC_CTYPE));\nvar_dump(dcgettext('dngettextTest', 'item', LC_MESSAGES));\n?>")).toMatchSnapshot();
  });
});
