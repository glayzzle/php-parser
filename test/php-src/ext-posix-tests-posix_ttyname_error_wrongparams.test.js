// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_error_wrongparams.phpt
  it("Test posix_ttyname() with wrong parameters", function () {
    expect(parser.parseCode("<?php\nvar_dump(posix_ttyname(0)); // param not a resource\n$descriptors = [[\"pty\"], [\"pty\"], [\"pty\"], [\"pipe\", \"w\"]];\n$pipes = [];\n$process = proc_open('echo \"foo\";', $descriptors, $pipes);\ntry {\n    var_dump(posix_ttyname($process)); // wrong resource type\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
