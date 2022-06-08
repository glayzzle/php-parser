// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug38474.phpt
  it("Bug #38474 (getAttribute select attribute by order, even when prefixed) (OK to fail with libxml2 < 2.6.2x)", function () {
    expect(parser.parseCode("<?php\n$xml = '<node xmlns:pre=\"http://foo.com/tr/pre\"\n              xmlns:post=\"http://foo.com/tr/post\"\n              pre:type=\"bar\" type=\"foo\" ><sub /></node>';\n$dom = new DomDocument();\n$dom->loadXML($xml);\necho $dom->firstChild->getAttribute('type').\"\\n\";\necho $dom->firstChild->getAttribute('pre:type').\"\\n\";\n$dom->firstChild->setAttribute('pre:type', 'bar2');\n$dom->firstChild->setAttribute('type', 'foo2');\n$dom->firstChild->setAttribute('post:type', 'baz');\n$dom->firstChild->setAttribute('new:type', 'baz2');\necho $dom->firstChild->getAttribute('type').\"\\n\";\necho $dom->firstChild->getAttribute('pre:type').\"\\n\";\necho $dom->firstChild->getAttribute('post:type').\"\\n\";\n$dom->firstChild->removeAttribute('pre:type');\n$dom->firstChild->removeAttribute('type');\necho $dom->firstChild->getAttribute('type').\"\\n\";\necho $dom->firstChild->getAttribute('pre:type').\"\\n\";\necho $dom->firstChild->getAttribute('post:type').\"\\n\";\necho $dom->firstChild->getAttribute('new:type');\n?>")).toMatchSnapshot();
  });
});
