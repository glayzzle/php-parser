// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug46427.phpt
  it("Bug #46427 (SoapClient() stumbles over its \"stream_context\" parameter)", function () {
    expect(parser.parseCode("<?php\nfunction getSoapClient_1() {\n    $ctx = stream_context_create();\n    return new SoapClient(NULL, array(\n        'stream_context' => $ctx,\n        'location' => 'test://',\n        'uri' => 'test://',\n        'exceptions' => false));\n}\ngetSoapClient_1()->__soapCall('Help', array());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
