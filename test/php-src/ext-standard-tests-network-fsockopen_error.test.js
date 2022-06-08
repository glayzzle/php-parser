// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/fsockopen_error.phpt
  it("Test fsockopen() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fsockopen() : basic error conditions ***\\n\";\necho \"\\n-- Attempting to connect to a non-existent socket --\\n\";\n$hostname = 'tcp://127.0.0.1'; // loopback address\n$port = 31337;\n$errno = null;\n$errstr = null;\n$timeout = 1.5;\nvar_dump( fsockopen($hostname, $port, $errno, $errstr, $timeout) );\nvar_dump($errstr);\necho \"\\n-- Attempting to connect using an invalid protocol --\\n\";\n$hostname = 'invalid://127.0.0.1'; // loopback address\n$port = 31337;\n$errno = null;\n$errstr = null;\n$timeout = 1.5;\nvar_dump( fsockopen($hostname, $port, $errno, $errstr, $timeout) );\nvar_dump($errstr);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
