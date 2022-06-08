// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_set_external_entity_loader_error1.phpt
  it("libxml_set_external_entity_loader() error: bad arguments", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<!DOCTYPE foo PUBLIC \"-//FOO/BAR\" \"http://example.com/foobar\">\n<foo>bar</foo>\nXML;\n$dd = new DOMDocument;\n$r = $dd->loadXML($xml);\nvar_dump(libxml_set_external_entity_loader(function($a, $b, $c, $d) {}));\ntry {\n    var_dump($dd->validate());\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
