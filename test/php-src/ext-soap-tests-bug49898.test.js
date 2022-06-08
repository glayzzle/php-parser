// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug49898.phpt
  it("Test for bug #49898: SoapClient::__getCookies() implementation", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(null, array('uri' => 'mo:http://www.w3.org/', 'location' => 'http://some.url'));\n$client->__setCookie(\"CookieTest\", \"HelloWorld\");\nvar_dump($client->__getCookies()['CookieTest'][0]);\n?>")).toMatchSnapshot();
  });
});
