// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/ini_encoding2.phpt
  it("Encoding INI test", function () {
    expect(parser.parseCode("<?php\necho \"Getting INI\\n\";\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_get('mbstring.internal_encoding'));\nvar_dump(mb_internal_encoding());\nvar_dump(ini_get('mbstring.http_input'));\nvar_dump(ini_get('mbstring.http_output'));\necho \"Setting INI\\n\";\nvar_dump(ini_set('default_charset', 'UTF-8'));\nvar_dump(ini_set('internal_encoding', 'UTF-8'));\nvar_dump(ini_set('input_encoding', 'UTF-8'));\nvar_dump(ini_set('output_encoding', 'UTF-8'));\nvar_dump(ini_set('mbstring.internal_encoding', 'UTF-8'));\nvar_dump(ini_set('mbstring.http_input', 'UTF-8'));\nvar_dump(ini_set('mbstring.http_output', 'UTF-8'));\necho \"Getting INI\\n\";\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_get('mbstring.internal_encoding'));\nvar_dump(mb_internal_encoding());\nvar_dump(ini_get('mbstring.http_input'));\nvar_dump(ini_get('mbstring.http_output'));\n?>")).toMatchSnapshot();
  });
});
