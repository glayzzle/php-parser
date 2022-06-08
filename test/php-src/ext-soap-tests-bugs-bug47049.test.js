// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug47049.phpt
  it("Bug #47049 (SoapClient::__soapCall causes a segmentation fault)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__ . '/bug47049.wsdl',\n    array('trace' => 1 , 'exceptions' => 0));\n$host = array('uuid' => 'foo');\n$software_list = array(array('name' => 'package', 'version' => '1.2.3', 'state' => 'installed'));\n$updates = array();\n$report_id = $client->__soapCall('reportSoftwareStatus',array($host, $software_list, $updates));\necho $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
