// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug69485.phpt
  it("Bug #69485 (Double free on zend_list_dtor)", function () {
    expect(parser.parseCode("<?php\nclass O {\n    public $ch;\n    public function dummy() {\n    }\n}\n$ch = curl_init();\n$o = new O;\n$o->ch = $ch;\ncurl_setopt($ch, CURLOPT_WRITEFUNCTION, array($o, \"dummy\"));\n?>\n==DONE==")).toMatchSnapshot();
  });
});
