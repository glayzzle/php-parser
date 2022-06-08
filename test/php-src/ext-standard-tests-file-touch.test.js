// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/touch.phpt
  it("touch() tests", function () {
    expect(parser.parseCode("<?php\n// This doesn't work for windows, time, atime usage results in very different\n// output to linux. This could be a php.net bug on windows or a windows querk.\n$filename = __DIR__.\"/touch.dat\";\nvar_dump(touch($filename));\nvar_dump(filemtime($filename));\n@unlink($filename);\nvar_dump(touch($filename, 101));\nvar_dump(filemtime($filename));\n@unlink($filename);\nvar_dump(touch($filename, -1));\nvar_dump(filemtime($filename));\n@unlink($filename);\nvar_dump(touch($filename, 100, 100));\nvar_dump(filemtime($filename));\n@unlink($filename);\nvar_dump(touch($filename, 100, -100));\nvar_dump(filemtime($filename));\nvar_dump(touch(\"/no/such/file/or/directory\"));\n@unlink($filename);\ntry {\n    touch(\"/no/such/file/or/directory\", null, 1599492068);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
