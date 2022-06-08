// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46051.phpt
  it("Bug #46051 (SplFileInfo::openFile - memory overlap)", function () {
    expect(parser.parseCode("<?php\n$x = new splfileinfo(__FILE__);\ntry {\n    $x->openFile(\"\", false, []);\n} catch (TypeError $e) { }\nvar_dump($x->getPathName());\n?>")).toMatchSnapshot();
  });
});
