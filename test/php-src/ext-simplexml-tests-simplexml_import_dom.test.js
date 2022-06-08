// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/simplexml_import_dom.phpt
  it("SimpleXML [interop]: simplexml_import_dom", function () {
    expect(parser.parseCode("<?php\n$dom = new domDocument;\n$dom->load(__DIR__.\"/book.xml\");\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$s = simplexml_import_dom($dom);\n$books = $s->book;\nforeach ($books as $book) {\n    echo \"{$book->title} was written by {$book->author}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
