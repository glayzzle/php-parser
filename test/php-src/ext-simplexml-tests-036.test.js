// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/036.phpt
  it("SimpleXML: overridden count() method", function () {
    expect(parser.parseCode("<?php\nclass SXE extends SimpleXmlElement {\n    public function count(): int {\n        echo \"Called Count!\\n\";\n        return parent::count();\n    }\n}\n$str = '<xml><c>asdf</c><c>ghjk</c></xml>';\n$sxe = new SXE($str);\nvar_dump(count($sxe));\n?>")).toMatchSnapshot();
  });
});
