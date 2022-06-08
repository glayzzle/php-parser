// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug45485.phpt
  it("Bug #45485 (strip_tags and <?XML tag)", function () {
    expect(parser.parseCode("<?php\n$s =<<< EOD\nThis text is shown <?XML:NAMESPACE PREFIX = ST1 /><b>This Text disappears</b>\nEOD;\n$s = strip_tags($s);\necho htmlspecialchars($s),\"\\n\";\n$s =<<< EOD\nThis text is shown <?xml:NAMESPACE PREFIX = ST1 /><b>This Text disappears</b>\nEOD;\n$s = strip_tags($s);\necho htmlspecialchars($s),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
