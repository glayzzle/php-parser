// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_default_charset.phpt
  it("Test default_charset handling", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing default_charset handling ***\\n\";\necho \"--- Get php.ini values ---\\n\";\nvar_dump(ini_get('default_charset'),\n         ini_get('internal_encoding'),\n         ini_get('input_encoding'),\n         ini_get('output_encoding'),\n         ini_get('iconv.internal_encoding'),\n         ini_get('iconv.input_encoding'),\n         ini_get('iconv.output_encoding'));\necho \"\\n--- Altering encodings ---\\n\";\nvar_dump(ini_set('default_charset', 'ISO-8859-1'));\necho \"\\n--- results of alterations ---\\n\";\nvar_dump(ini_get('default_charset'),\n         ini_get('internal_encoding'),\n         ini_get('input_encoding'),\n         ini_get('output_encoding'),\n         ini_get('iconv.internal_encoding'),\n         ini_get('iconv.input_encoding'),\n         ini_get('iconv.output_encoding'));\n/*\necho \"\\n--- Altering encodings ---\\n\";\nvar_dump(ini_set('default_charset', 'ISO-8859-1'),\n         ini_set('internal_encoding'),\n         ini_set('input_encoding'),\n         ini_set('output_encoding'),\n         ini_set('iconv.internal_encoding'),\n         ini_set('iconv.input_encoding'),\n         ini_set('iconv.output_encoding'));\n*/\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
