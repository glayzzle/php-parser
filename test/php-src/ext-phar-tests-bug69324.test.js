// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69324.phpt
  it("Bug #69324: Buffer Over-read in unserialize when parsing Phar", function () {
    expect(parser.parseCode("<?php\ntry {\n$p = new Phar(__DIR__.'/bug69324.phar', 0);\n$meta=$p->getMetadata();\nvar_dump($meta);\n} catch(Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
