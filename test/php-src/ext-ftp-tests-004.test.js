// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/004.phpt
  it("FTP with bogus parameters", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n// Negative timeout\ntry {\n    ftp_connect('127.0.0.1', 0, -3);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_login($ftp, 'user', 'bogus'));\nvar_dump(ftp_quit($ftp));\n?>")).toMatchSnapshot();
  });
});
