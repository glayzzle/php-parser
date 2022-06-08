// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities.phpt
  it("HTML entities of ISO-8859 chars", function () {
    expect(parser.parseCode("<?php\nsetlocale (LC_CTYPE, \"C\");\n$sc_encoded = htmlspecialchars (\"<>\\\"&��\\n\",ENT_COMPAT,\"ISO-8859-1\");\necho $sc_encoded;\n$ent_encoded = htmlentities (\"<>\\\"&��\\n\",ENT_COMPAT,\"ISO-8859-1\");\necho $ent_encoded;\necho html_entity_decode($sc_encoded,ENT_COMPAT,\"ISO-8859-1\");\necho html_entity_decode($ent_encoded,ENT_COMPAT,\"ISO-8859-1\");\n?>")).toMatchSnapshot();
  });
});
