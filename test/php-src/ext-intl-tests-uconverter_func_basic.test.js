// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_func_basic.phpt
  it("Basic UConverter::transcode() usage", function () {
    expect(parser.parseCode("<?php\nvar_dump(UConverter::transcode(\"This is an ascii string\", 'utf-8', 'latin1'));\n// urlencode so that non-ascii shows up parsable in phpt file\nvar_dump(urlencode(UConverter::transcode(\"Espa\\xF1ol\", 'utf-8', 'latin1')));\nvar_dump(urlencode(UConverter::transcode(\"Stra\\xDFa\",  'utf-8', 'latin1')));\nvar_dump(bin2hex(UConverter::transcode(\"\\xE4\", 'utf-8', 'koi8-r')));\n?>")).toMatchSnapshot();
  });
});
