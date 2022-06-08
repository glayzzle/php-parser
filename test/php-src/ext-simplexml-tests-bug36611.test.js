// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug36611.phpt
  it("Bug #36611 (assignment to SimpleXML object attribute changes argument type to string)", function () {
    expect(parser.parseCode("<?php\n$xml_str = <<<EOD\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<c_fpobel >\n  <pos >\n    <pos/>\n  </pos>\n</c_fpobel>\nEOD;\n$xml = simplexml_load_string($xml_str);\n$val = 1;\nvar_dump($val);\n$xml->pos[\"act_idx\"] = $val;\nvar_dump($val);\n?>")).toMatchSnapshot();
  });
});
