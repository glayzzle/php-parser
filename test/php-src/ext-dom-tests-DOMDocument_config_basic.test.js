// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_config_basic.phpt
  it("Tests DOMDocument::config read", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument;\necho \"DOMDocument created\\n\";\n$test = $dom->config;\necho \"Read config:\\n\";\nvar_dump( $test );\n// note -- will always be null as DOMConfiguration is not implemented in PHP\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
