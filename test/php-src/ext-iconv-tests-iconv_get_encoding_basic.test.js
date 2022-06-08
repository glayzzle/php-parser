// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_get_encoding_basic.phpt
  it("iconv_get_encoding() parameter tests", function () {
    expect(parser.parseCode("<?php\niconv_set_encoding(\"internal_encoding\", \"UTF-8\");\niconv_set_encoding(\"output_encoding\",   \"UTF-8\");\niconv_set_encoding(\"input_encoding\",    \"UTF-8\");\nvar_dump( iconv_get_encoding('internal_encoding') );\nvar_dump( iconv_get_encoding('output_encoding')   );\nvar_dump( iconv_get_encoding('input_encoding')    );\nvar_dump( iconv_get_encoding('all')               );\nvar_dump( iconv_get_encoding('foo')               );\nvar_dump( iconv_get_encoding()                    );\niconv_set_encoding(\"internal_encoding\", \"ISO-8859-1\");\niconv_set_encoding(\"output_encoding\",   \"ISO-8859-1\");\niconv_set_encoding(\"input_encoding\",    \"ISO-8859-1\");\nvar_dump( iconv_get_encoding('internal_encoding') );\nvar_dump( iconv_get_encoding('output_encoding')   );\nvar_dump( iconv_get_encoding('input_encoding')    );\nvar_dump( iconv_get_encoding('all')               );\nvar_dump( iconv_get_encoding('foo')               );\nvar_dump( iconv_get_encoding()                    );\n?>")).toMatchSnapshot();
  });
});
