// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug26384.phpt
  it("Bug #26384 (domxslt->process causes segfault with xsl:key)", function () {
    expect(parser.parseCode("<?php\n$dom = new domDocument;\n$dom->load(__DIR__.\"/area_name.xml\");\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$xsl = new domDocument;\n$xsl->load(__DIR__.\"/area_list.xsl\");\nif(!$xsl) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$proc = new xsltprocessor;\nif(!$proc) {\n  echo \"Error while making xsltprocessor object\\n\";\n  exit;\n}\n$proc->importStylesheet($xsl);\nprint $proc->transformToXml($dom);\n//this segfaulted before\nprint $dom->documentElement->firstChild->nextSibling->nodeName;\n?>")).toMatchSnapshot();
  });
});
