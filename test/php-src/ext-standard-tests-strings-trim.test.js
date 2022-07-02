// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/trim.phpt
  it("trim(), rtrim() and ltrim() functions", function () {
    expect(parser.parseCode("<?php\nvar_dump('ABC' ===  trim('ABC'));\nvar_dump('ABC' === ltrim('ABC'));\nvar_dump('ABC' === rtrim('ABC'));\nvar_dump('ABC' ===  trim(\" \\0\\t\\nABC \\0\\t\\n\"));\nvar_dump(\"ABC \\0\\t\\n\" === ltrim(\" \\0\\t\\nABC \\0\\t\\n\"));\nvar_dump(\" \\0\\t\\nABC\" === rtrim(\" \\0\\t\\nABC \\0\\t\\n\"));\nvar_dump(\" \\0\\t\\nABC \\0\\t\\n\" ===  trim(\" \\0\\t\\nABC \\0\\t\\n\",''));\nvar_dump(\" \\0\\t\\nABC \\0\\t\\n\" === ltrim(\" \\0\\t\\nABC \\0\\t\\n\",''));\nvar_dump(\" \\0\\t\\nABC \\0\\t\\n\" === rtrim(\" \\0\\t\\nABC \\0\\t\\n\",''));\nvar_dump(\"ABC\\x50\\xC1\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x51..\\xC0\"));\nvar_dump(\"ABC\\x50\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x51..\\xC1\"));\nvar_dump(\"ABC\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x50..\\xC1\"));\nvar_dump(\"ABC\\x50\\xC1\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x51..\\xC0\"));\nvar_dump(\"ABC\\x50\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x51..\\xC1\"));\nvar_dump(\"ABC\" === trim(\"ABC\\x50\\xC1\\x60\\x90\",\"\\x50..\\xC1\"));\n?>")).toMatchSnapshot();
  });
});
