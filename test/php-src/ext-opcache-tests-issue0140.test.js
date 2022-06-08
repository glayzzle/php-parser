// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0140.phpt
  it("Issue #140: \"opcache.enable_file_override\" doesn't respect \"opcache.revalidate_freq\"", function () {
    expect(parser.parseCode("<?php\ndefine(\"FILENAME\", __DIR__ . \"/issuer0140.inc.php\");\nfile_put_contents(FILENAME, \"1\\n\");\nvar_dump(is_readable(FILENAME));\ninclude(FILENAME);\nvar_dump(filemtime(FILENAME));\nsleep(2);\nfile_put_contents(FILENAME, \"2\\n\");\nvar_dump(is_readable(FILENAME));\ninclude(FILENAME);\nvar_dump(filemtime(FILENAME));\nsleep(2);\nunlink(FILENAME);\nvar_dump(is_readable(FILENAME));\nvar_dump(@include(FILENAME));\nvar_dump(@filemtime(FILENAME));\n?>")).toMatchSnapshot();
  });
});
