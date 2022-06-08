// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug67116.phpt
  it("Bug #67116 (Inconsistent parsing of Nodes w/o linefeed)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<aa>\n    <bs>\n        <b>b</b>\n    </bs>\n    <cs><c>b</c></cs>\n    <ds><d id=\"d\"></d></ds>\n    <es>\n        <e id=\"e\"></e>\n    </es>\n    <fs><f id=\"f\"></f><f id=\"f\"></f></fs>\n</aa>\nXML;\n$sxe = simplexml_load_string($xml);\nprint_r($sxe);\n?>")).toMatchSnapshot();
  });
});
