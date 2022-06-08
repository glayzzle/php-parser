// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43008.phpt
  it("Bug #43008 (php://filter uris ignore url encoded filternames and can't handle slashes)", function () {
    expect(parser.parseCode("<?php\n$url = \"\"\n    . \"php://filter/read=\"\n    . urlencode(\"convert.iconv.ISO-8859-15/UTF-8\")\n    . '|' . urlencode(\"string.rot13\")\n    . '|' . urlencode(\"string.rot13\")\n    . '|' . urlencode(\"convert.iconv.UTF-8/ISO-8859-15\")\n    . \"/resource=data://text/plain,foob%E2r\";\nvar_dump(urlencode(file_get_contents($url)));\n?>")).toMatchSnapshot();
  });
});
