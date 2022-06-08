// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTMLFile_invalid_filename.phpt
  it("DOMDocument::saveHTMLFile() should fail with invalid filename", function () {
    expect(parser.parseCode("<?php\n$filename = '';\n$doc = new DOMDocument('1.0');\n$root = $doc->createElement('html');\n$root = $doc->appendChild($root);\n$head = $doc->createElement('head');\n$head = $root->appendChild($head);\n$title = $doc->createElement('title');\n$title = $head->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$text = $title->appendChild($text);\ntry {\n    $doc->saveHTMLFile($filename);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
