// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug75774.phpt
  it("Bug #75774 imap_append HeapCorruction", function () {
    expect(parser.parseCode("<?php\n$fn = __DIR__ . DIRECTORY_SEPARATOR . \"foo75774\";\n$var1 = fopen($fn, \"w\");\ntry {\n    imap_append($var1, \"\", \"\", \"\", \"\");\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nfclose($var1);\nunlink($fn);\n?>")).toMatchSnapshot();
  });
});
