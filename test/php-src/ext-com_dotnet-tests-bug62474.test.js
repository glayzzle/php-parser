// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug62474.phpt
  it("Bug #62474 (com_event_sink crashes on certain arguments)", function () {
    expect(parser.parseCode("<?php\nvar_dump(com_event_sink(new variant, function() {}, array()));\nvar_dump(com_event_sink(new variant, new variant, 'a'));\n?>")).toMatchSnapshot();
  });
});
