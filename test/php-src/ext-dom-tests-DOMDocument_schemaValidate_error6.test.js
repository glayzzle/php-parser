// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidate_error6.phpt
  it("DomDocument::schemaValidate() - invalid path to schema", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\ntry {\n    $doc->schemaValidate(\"/path/with/\\0/byte\");\n} catch (ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($doc->schemaValidate(str_repeat(\" \", PHP_MAXPATHLEN + 1)));\n?>")).toMatchSnapshot();
  });
});
