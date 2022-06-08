// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/dead-resource.phpt
  it("Attempt to use a closed FTP\\Connection", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_close($ftp));\ntry {\n    var_dump(ftp_login($ftp, 'user', 'pass'));\n    echo \"Login did not throw\\n\";\n} catch (ValueError $ex) {\n    echo \"Exception: \", $ex->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
