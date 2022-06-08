// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug60965.phpt
  it("Bug #60965: Buffer overflow on htmlspecialchars/entities with $double=false", function () {
    expect(parser.parseCode("<?php\necho htmlspecialchars('\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"&#x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;',\nENT_QUOTES, 'UTF-8', false), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
