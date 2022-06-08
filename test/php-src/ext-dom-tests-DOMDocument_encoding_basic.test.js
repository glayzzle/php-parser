// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_encoding_basic.phpt
  it("DOMDocument::$encoding - read/write tests (dom_document_encoding_read/dom_document_encoding_write)", function () {
    expect(parser.parseCode("<?php\nrequire_once('dom_test.inc');\n$dom = new DOMDocument;\n$dom->loadXML($xmlstr);\nif( !$dom )\n{\n    echo \"Error while parsing the document\\n\";\n    exit;\n}\necho \"Empty Encoding Read: '{$dom->encoding}'\\n\";\ntry {\n    $ret = $dom->encoding = 'NYPHP DOMinatrix';\n    echo \"Adding invalid encoding: $ret\\n\";\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$ret = $dom->encoding = 'ISO-8859-1';\necho \"Adding ISO-8859-1 encoding: $ret\\n\";\necho \"ISO-8859-1 Encoding Read: {$dom->encoding}\\n\";\n$ret = $dom->encoding = 'UTF-8';\necho \"Adding UTF-8 encoding: $ret\\n\";\necho \"UTF-8 Encoding Read: {$dom->encoding}\\n\";\n$ret = $dom->encoding = 'UTF-16';\necho \"Adding UTF-16 encoding: $ret\\n\";\necho \"UTF-16 Encoding Read: {$dom->encoding}\\n\";\n?>")).toMatchSnapshot();
  });
});
