// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug76348.phpt
  it("Bug #76348 (WSDL_CACHE_MEMORY causes Segmentation fault)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__ . DIRECTORY_SEPARATOR . 'bug76348.wsdl', [\n    'cache_wsdl' => WSDL_CACHE_MEMORY,\n]);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
