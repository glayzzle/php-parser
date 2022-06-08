// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/006.phpt
  it("json_encode() & extended encoding", function () {
    expect(parser.parseCode("<?php\n$a = array('<foo>', \"'bar'\", '\"baz\"', '&blong&');\necho \"Normal: \", json_encode($a), \"\\n\";\necho \"Tags: \",   json_encode($a, JSON_HEX_TAG), \"\\n\";\necho \"Apos: \",   json_encode($a, JSON_HEX_APOS), \"\\n\";\necho \"Quot: \",   json_encode($a, JSON_HEX_QUOT), \"\\n\";\necho \"Amp: \",    json_encode($a, JSON_HEX_AMP), \"\\n\";\necho \"All: \",    json_encode($a, JSON_HEX_TAG|JSON_HEX_APOS|JSON_HEX_QUOT|JSON_HEX_AMP), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
