// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug73817.phpt
  it("Bug #73817 (Incorrect entries in get_html_translation_table)", function () {
    expect(parser.parseCode("<?php\n$entities = get_html_translation_table( HTML_ENTITIES, ENT_QUOTES | ENT_HTML5);\nforeach ($entities as $entity) {\n    if (substr($entity, -1) !== ';') {\n        var_dump($entity);\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
