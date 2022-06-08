// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug46760.phpt
  it("Bug #46760 (SoapClient doRequest fails when proxy is used)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(null, array('proxy_host'     => \"localhost\",\n                                            'proxy_port'     => '8080',\n                                            'login'    => \"user\",\n                                            'password' => \"test\",\n                                            'uri'            => 'mo:http://www.w3.org/',\n                                            'location'       => 'http://some.url'));\nvar_dump($client);\n?>")).toMatchSnapshot();
  });
});
