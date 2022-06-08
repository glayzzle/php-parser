// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale/bug72809.phpt
  it("Bug #72809 (Locale::lookup() wrong result with canonicalize option)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    Locale::lookup(['en', 'en-US'], 'en-US-u-cu-EUR-tz-deber-fw-mon', true),\n    Locale::lookup(['en', 'en_US'], 'en_US@currency=eur;fw=mon;timezone=Europe/Berlin', false),\n    Locale::lookup(['en', 'en_US'], 'en_US@currency=eur;fw=mon;timezone=Europe/Berlin', true),\n);\n?>")).toMatchSnapshot();
  });
});
