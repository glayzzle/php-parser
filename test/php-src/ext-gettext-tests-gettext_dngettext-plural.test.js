// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_dngettext-plural.phpt
  it("Test if dngettext() returns the correct translations (optionally plural).", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain('dngettextTest', './locale');\nvar_dump(dngettext('dngettextTest', 'item', 'items', 1));\nvar_dump(dngettext('dngettextTest', 'item', 'items', 2));\n?>")).toMatchSnapshot();
  });
});
