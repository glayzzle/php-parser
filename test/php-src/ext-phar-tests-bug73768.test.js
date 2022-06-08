// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug73768.phpt
  it("Phar: PHP bug #73768: Memory corruption when loading hostile phar", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n$p = Phar::LoadPhar('bug73768.phar', 'alias.phar');\necho \"OK\\n\";\n} catch(PharException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
