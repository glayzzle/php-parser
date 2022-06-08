// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug38354.phpt
  it("Bug #38354 (Unwanted reformatting of XML when using AsXML)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string(\n'<code>\n    <a href=\"javascript:alert(\\'1\\');\"><strong>Item Two</strong></a>\n</code>'\n);\nforeach ($xml->xpath(\"//*\") as $element) {\n    var_dump($element->asXML());\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
