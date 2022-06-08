// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug53735.phpt
  it("Bug #53735 NumberFormatter returns NaN when converting float point", function () {
    expect(parser.parseCode("<?php\n$fmt = numfmt_create(\"da_DK\", \\NumberFormatter::CURRENCY);\nvar_dump(numfmt_format($fmt, 5.5));\nsetlocale(LC_ALL, \"da_DK.UTF-8\");\nvar_dump(numfmt_format($fmt, 5.5));\n$fmt = new \\NumberFormatter(\"de_DE\", \\NumberFormatter::DECIMAL);\nvar_dump($fmt->format(23.25));\n$f = new NumberFormatter('hu_HU', NumberFormatter::PERCENT, '#,##0%');\nvar_dump($f->format(0.26));\n?>")).toMatchSnapshot();
  });
});
