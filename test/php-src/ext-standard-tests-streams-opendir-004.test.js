// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/opendir-004.phpt
  it("opendir() with 'ftps://' stream.", function () {
    expect(parser.parseCode("<?php\n$ssl=true;\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftps://127.0.0.1:\" . $port.\"/\";\n$context = stream_context_create(array('ssl' => array('cafile' =>  __DIR__ . '/../../../ftp/tests/cert.pem')));\n$ds=opendir($path, $context);\nvar_dump($ds);\nwhile ($fn=readdir($ds)) {\n      var_dump($fn);\n}\n?>")).toMatchSnapshot();
  });
});
