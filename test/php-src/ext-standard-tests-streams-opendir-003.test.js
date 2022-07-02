// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/opendir-003.phpt
  it("opendir() with 'ftps://' stream.", function () {
    expect(parser.parseCode("<?php\n$ssl=true;\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftps://127.0.0.1:\" . $port.\"/bogusdir\";\n$context = stream_context_create(array('ssl' => array('cafile' =>  __DIR__ . '/../../../ftp/tests/cert.pem')));\nvar_dump(opendir($path, $context));\n?>")).toMatchSnapshot();
  });
});
