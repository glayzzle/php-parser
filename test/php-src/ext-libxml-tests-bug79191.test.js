// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug79191.phpt
  it("Bug #79191 (Error in SoapClient ctor disables DOMDocument::save())", function () {
    expect(parser.parseCode("<?php\ntry {\n    new \\SoapClient('does-not-exist.wsdl');\n} catch (Throwable $t) {\n}\n$dom = new DOMDocument;\n$dom->loadxml('<?xml version=\"1.0\" ?><root />');\nvar_dump($dom->save(__DIR__ . '/bug79191.xml'));\n?>")).toMatchSnapshot();
  });
});
