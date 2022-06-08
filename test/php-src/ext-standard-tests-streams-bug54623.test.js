// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug54623.phpt
  it("Bug #54623: Segfault when when writing to a persistent socket after closing a copy of the socket", function () {
    expect(parser.parseCode("<?php\n$sock = pfsockopen('udp://127.0.0.1', '63844');\nvar_dump((int)$sock);\n@fwrite($sock, \"1\");\n$sock2 = pfsockopen('udp://127.0.0.1', '63844');\nvar_dump((int)$sock2);\n@fwrite($sock2, \"2\");\nfclose($sock2);\ntry {\n    fwrite($sock, \"3\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
