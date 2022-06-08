// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug49092.phpt
  it("Bug #49092 (ReflectionFunction fails to work with functions in fully qualified namespaces)", function () {
    expect(parser.parseCode("<?php\nnamespace ns;\nfunction func(){}\nnew \\ReflectionFunction('ns\\func');\nnew \\ReflectionFunction('\\ns\\func');\necho \"Ok\\n\"\n?>")).toMatchSnapshot();
  });
});
