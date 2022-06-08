// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/quotemeta_basic.phpt
  it("Test quotemeta() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing quotemeta() : basic functionality ***\\n\";\nvar_dump(quotemeta(\"Hello how are you ?\"));\nvar_dump(quotemeta(\"(100 + 50) * 10\"));\nvar_dump(quotemeta(\"\\+*?[^]($)\"));\n?>")).toMatchSnapshot();
  });
});
