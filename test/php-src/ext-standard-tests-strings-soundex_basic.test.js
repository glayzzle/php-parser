// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/soundex_basic.phpt
  it("Test soundex() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing soundex() : basic functionality ***\\n\";\nvar_dump(soundex(\"Euler\"));\nvar_dump(soundex(\"Gauss\"));\nvar_dump(soundex(\"Hilbert\"));\nvar_dump(soundex(\"Knuth\"));\nvar_dump(soundex(\"Lloyd\"));\nvar_dump(soundex(\"Lukasiewicz\"));\nvar_dump(soundex(\"Euler\")       == soundex(\"Ellery\"));    // E460\nvar_dump(soundex(\"Gauss\")       == soundex(\"Ghosh\"));     // G200\nvar_dump(soundex(\"Hilbert\")     == soundex(\"Heilbronn\")); // H416\nvar_dump(soundex(\"Knuth\")       == soundex(\"Kant\"));      // K530\nvar_dump(soundex(\"Lloyd\")       == soundex(\"Ladd\"));      // L300\nvar_dump(soundex(\"Lukasiewicz\") == soundex(\"Lissajous\")); // L222\nvar_dump(soundex(\"Lukasiewicz\") == soundex(\"Ghosh\"));\nvar_dump(soundex(\"Hilbert\") == soundex(\"Ladd\"));\n?>")).toMatchSnapshot();
  });
});
