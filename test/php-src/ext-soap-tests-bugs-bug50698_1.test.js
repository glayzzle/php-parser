// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug50698_1.phpt
  it("Request #50698_1 (SoapClient should handle wsdls with some incompatible endpoints)", function () {
    expect(parser.parseCode("<?php\nnew SoapClient(__DIR__ . '/bug50698_1.wsdl');\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
