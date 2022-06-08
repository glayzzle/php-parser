// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_unlink.phpt
  it("Test fopen() function : check fopen()ed descriptor is usable after the fs object is removed", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    $p = __DIR__ . DIRECTORY_SEPARATOR . 'tututu',\n    $f = fopen($p, 'w+'),\n    unlink($p),\n    file_exists($p),\n    fwrite($f, 'hello'),\n    fseek($f, 0),\n    fread($f, 16),\n    fwrite($f, 'world'),\n    fseek($f, 0),\n    fread($f, 16),\n    fclose($f)\n);\n?>")).toMatchSnapshot();
  });
});
