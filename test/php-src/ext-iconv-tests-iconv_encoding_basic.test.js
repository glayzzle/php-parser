// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_encoding_basic.phpt
  it("Test iconv_get_encoding()/iconv_set_encoding() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test Basic functionality of iconv_get_encoding/iconv_set_encoding\n */\necho \"*** Testing iconv_get_encoding()/iconv_set_encoding() : basic functionality ***\\n\";\necho \"--- Default get_encoding ---\\n\";\nvar_dump(iconv_get_encoding());\nvar_dump(iconv_get_encoding(\"input_encoding\"));\nvar_dump(iconv_get_encoding(\"output_encoding\"));\nvar_dump(iconv_get_encoding(\"internal_encoding\"));\nvar_dump(iconv_get_encoding(\"all\"));\necho \"\\n--- Altering encodings ---\\n\";\nvar_dump(iconv_set_encoding(\"input_encoding\", \"UTF-8\"));\nvar_dump(iconv_set_encoding(\"output_encoding\", \"UTF-8\"));\nvar_dump(iconv_set_encoding(\"internal_encoding\", \"UTF-8\"));\necho \"\\n--- results of alterations ---\\n\";\nvar_dump(iconv_get_encoding());\nvar_dump(iconv_get_encoding(\"input_encoding\"));\nvar_dump(iconv_get_encoding(\"output_encoding\"));\nvar_dump(iconv_get_encoding(\"internal_encoding\"));\nvar_dump(iconv_get_encoding(\"all\"));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
