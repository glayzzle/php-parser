// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_ini_encoding.phpt
  it("Encoding INI test", function () {
    expect(parser.parseCode("<?php\necho \"Getting INI\\n\";\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_get('iconv.internal_encoding'));\nvar_dump(ini_get('iconv.input_encoding'));\nvar_dump(ini_get('iconv.output_encoding'));\necho \"Setting INI\\n\";\nvar_dump(ini_set('default_charset', 'UTF-8'));\nvar_dump(ini_set('internal_encoding', 'UTF-8'));\nvar_dump(ini_set('input_encoding', 'UTF-8'));\nvar_dump(ini_set('output_encoding', 'UTF-8'));\nvar_dump(ini_set('iconv.internal_encoding', 'UTF-8'));\nvar_dump(ini_set('iconv.input_encoding', 'UTF-8'));\nvar_dump(ini_set('iconv.output_encoding', 'UTF-8'));\necho \"Getting INI\\n\";\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_get('iconv.internal_encoding'));\nvar_dump(ini_get('iconv.input_encoding'));\nvar_dump(ini_get('iconv.output_encoding'));\n?>")).toMatchSnapshot();
  });
});
