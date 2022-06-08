// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/domobject_debug_handler.phpt
  it("Objects of DOM extension: debug info object handler.", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<foo>\n    <bar>foobar</bar>\n</foo>\nXML;\n$d = new domdocument;\n$d->dynamicProperty = new stdclass;\n$d->loadXML($xml);\nprint_r($d);\n?>")).toMatchSnapshot();
  });
});
