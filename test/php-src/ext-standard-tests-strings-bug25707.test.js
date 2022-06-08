// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug25707.phpt
  it("Bug #25707 (html_entity_decode over-decodes &amp;lt;)", function () {
    expect(parser.parseCode("<?php\nvar_dump(html_entity_decode(\"&amp;lt;\", ENT_COMPAT, 'ISO-8859-1'));\nvar_dump(html_entity_decode(\"&amp;#38;\", ENT_COMPAT, 'ISO-8859-1'));\nvar_dump(html_entity_decode(\"&amp;#38;lt;\", ENT_COMPAT, 'ISO-8859-1'));\n?>")).toMatchSnapshot();
  });
});
