// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug38424.phpt
  it("Bug #38424 (Different attribute assignment if new or exists)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string('<xml></xml>');\n$str = \"abc & def\" ;\n$xml[\"a1\"] = \"\" ;\n$xml[\"a1\"] = htmlspecialchars($str,ENT_NOQUOTES) ;\n$xml[\"a2\"] = htmlspecialchars($str,ENT_NOQUOTES) ;\n$xml[\"a3\"] = \"\" ;\n$xml[\"a3\"] = $str ;\n$xml[\"a4\"] = $str ;\necho $xml->asXML();\n?>")).toMatchSnapshot();
  });
});
