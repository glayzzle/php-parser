// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/html_entity_decode2.phpt
  it("html_entity_decode: Handling of &apos;", function () {
    expect(parser.parseCode("<?php\necho \"*** HTML 4.01 implicit (shouldn't decode) ***\\n\";\necho html_entity_decode(\"&apos;\", ENT_QUOTES, \"UTF-8\"), \"\\n\";\necho \"*** HTML 4.01 (shouldn't decode) ***\\n\";\necho html_entity_decode(\"&apos;\", ENT_QUOTES | ENT_HTML401, \"UTF-8\"), \"\\n\";\necho \"*** HTML 5 ***\\n\";\necho html_entity_decode(\"&apos;\", ENT_QUOTES | ENT_HTML5, \"UTF-8\"), \"\\n\";\necho \"*** XHTML 1.0 ***\\n\";\necho html_entity_decode(\"&apos;\", ENT_QUOTES | ENT_XHTML, \"UTF-8\"), \"\\n\";\necho \"*** XML 1.0 ***\\n\";\necho html_entity_decode(\"&apos;\", ENT_QUOTES | ENT_XML1, \"UTF-8\"), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
