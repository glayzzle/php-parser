// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_standalone_basic.phpt
  it("Tests DOMDocument::standalone get, set, and functionality", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument;\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<!DOCTYPE s1 PUBLIC \"http://www.ibm.com/example.dtd\" \"example.dtd\">\n<s1>foo</s1>';\n$dom->loadXML($xml);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\necho \"Standalone DOMDocument created\\n\";\n$test = $dom->standalone;\necho \"Read initial standalone:\\n\";\nvar_dump( $test );\n$dom->standalone = FALSE;\n$test = $dom->standalone;\necho \"Set standalone to FALSE, reading again:\\n\";\nvar_dump( $test );\n$test = $dom->saveXML();\necho \"Document is no longer standalone\\n\";\nvar_dump( $test );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
