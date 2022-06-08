// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/internal_encoding.phpt
  it("Check that \"internal_encoding\" ini is picked up by mbstring", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\nini_set('mbstring.internal_encoding', 'utf-8');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\n// mbstring.internal_encoding is set, this has no effect\nini_set('internal_encoding', 'iso-8859-2');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\n// mbstring.internal_encoding is unset, pick up internal_encoding again\nini_set('mbstring.internal_encoding', '');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\nmb_internal_encoding('utf-8');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\n// mb_internal_encoding() is set, this has no effect\nini_set('internal_encoding', 'iso-8859-3');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\n// mbstring.internal_encoding is unset, pick up internal_encoding again\nini_set('mbstring.internal_encoding', '');\nvar_dump(mb_internal_encoding());\nvar_dump(mb_strlen(\"\\xc3\\xb6\"));\n?>")).toMatchSnapshot();
  });
});
