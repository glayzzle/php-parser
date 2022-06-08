// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_bug72658.phpt
  it("Bug #72658 Locale::lookup() / locale_lookup() hangs if no match found", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    Locale::lookup(['en-Latn-US', 'sl', 'sl-IT'], 'en-US', true, 'de-DE'),\n    Locale::lookup(['en-Latn-US', 'sl', 'sl-IT'], 'en-US', false, 'de-DE')\n);\n?>")).toMatchSnapshot();
  });
});
