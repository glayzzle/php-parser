// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/node_textcontent.phpt
  it("Testing reading and writing to DOMNode::textContent", function () {
    expect(parser.parseCode("<?php\n/*\n If this test is failing it is because the libxml2 library being used does\n not have this bug fix from 2009:\n   https://github.com/GNOME/libxml2/commit/f3c06692e0d200ae0d35b5b3c31de8c56aa99ac6\n The workaround if you are being hit by this is to add a <!DOCTYPE html> tag\n*/\n$html = <<<HTML\n<div id=\"test\"><span>hi there</span></div>\nHTML;\n$text = '<p>hello world &trade;</p>';\n$dom = new DOMDocument('1.0', 'UTF-8');\n$dom->loadHTML($html);\n$node = $dom->getElementById('test');\nvar_dump($node->textContent);\n$node->textContent = $text;\nvar_dump($node->textContent == $text);\nvar_dump($dom->saveHTML($node));\n?>")).toMatchSnapshot();
  });
});
