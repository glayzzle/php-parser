// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug53021.phpt
  it("Bug #53021 (Failure to convert numeric entities with ENT_NOQUOTES and ISO-8859-1)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unpack(\"H*\",html_entity_decode(\"&#233;\", ENT_QUOTES, \"ISO-8859-1\")));\necho \"double quotes variations:\", \"\\n\";\necho html_entity_decode(\"&quot;\", ENT_NOQUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#34;\", ENT_NOQUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&quot;\", ENT_QUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#34;\", ENT_QUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&quot;\", ENT_COMPAT, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#34;\", ENT_COMPAT, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&quot;\"), \"\\n\";\necho html_entity_decode(\"&#34;\"), \"\\n\";\necho \"\\nsingle quotes variations:\", \"\\n\";\necho html_entity_decode(\"&#39;\", ENT_NOQUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#39;\", ENT_QUOTES, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#39;\", ENT_COMPAT, 'UTF-8'), \"\\n\";\necho html_entity_decode(\"&#39;\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
