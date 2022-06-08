// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/ssl_method_deprecation.phpt
  it("ssl_method option is deprecated", function () {
    expect(parser.parseCode("<?php\nnew SoapClient(null, [\n    'location' => 'foo',\n    'uri' => 'bar',\n    'ssl_method' => SOAP_SSL_METHOD_TLS,\n]);\n?>")).toMatchSnapshot();
  });
});
