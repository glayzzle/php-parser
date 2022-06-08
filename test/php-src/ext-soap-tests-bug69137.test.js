// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug69137.phpt
  it("SOAP Bug #69137 - Peer verification fails when using a proxy with SoapClient", function () {
    expect(parser.parseCode("<?php\nclass IpLookup\n{\n    public $licenseKey;\n    public $ipAddress;\n}\nlist ($proxyHost, $proxyPort) = explode(':', str_replace('http://', '', $_ENV['http_proxy']));\n// Prime the WSDL cache because that request sets peer_name on the HTTP context\n// and masks the SOAP bug.\n$testServiceWsdl = 'https://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl';\n$client = new SoapClient($testServiceWsdl);\nunset($client);\n$parameters = [\n    'proxy_host' => $proxyHost,\n    'proxy_port' => $proxyPort,\n    'trace' => 1,\n];\n$client = new SoapClient($testServiceWsdl, $parameters);\n$lookup = new IpLookup();\n$lookup->licenseKey = 0;\n$lookup->ipAddress = '72.52.91.14';\n$result = $client->ResolveIP($lookup);\nif ($result && is_object($result) && $result->ResolveIPResult && is_object($result->ResolveIPResult)) {\n    print \"successful lookup\";\n}\n?>")).toMatchSnapshot();
  });
});
