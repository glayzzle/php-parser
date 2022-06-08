// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/encoding.phpt
  it("PHP encoding setting test", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_set('default_charset', 'ISO-8859-1'));\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(ini_set('input_encoding', 'EUC-JP'));\nvar_dump(ini_set('internal_encoding', 'EUC-JP'));\nvar_dump(ini_set('output_encoding', 'EUC-JP'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('output_encoding'));\n?>")).toMatchSnapshot();
  });
});
