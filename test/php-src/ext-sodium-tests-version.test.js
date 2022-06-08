// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/version.phpt
  it("Check for libsodium version", function () {
    expect(parser.parseCode("<?php\necho strlen(SODIUM_LIBRARY_VERSION) >= 5;\necho \"\\n\";\necho SODIUM_LIBRARY_MAJOR_VERSION >= 4;\necho \"\\n\";\necho SODIUM_LIBRARY_MINOR_VERSION >= 0;\n?>")).toMatchSnapshot();
  });
});
