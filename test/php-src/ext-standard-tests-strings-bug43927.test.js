// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug43927.phpt
  it("Bug #43927 (koi8r is missing from html_entity_decode())", function () {
    expect(parser.parseCode("<?php\nvar_dump(html_entity_decode(\"&amp;lt;\", ENT_COMPAT, 'koi8-r'));\nvar_dump(html_entity_decode(\"&amp;#38;\", ENT_COMPAT, 'koi8-r'));\nvar_dump(html_entity_decode(\"&amp;#38;lt;\", ENT_COMPAT, 'koi8-r'));\n?>")).toMatchSnapshot();
  });
});
