// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug73764.phpt
  it("Phar: PHP bug #73764: Crash while loading hostile phar archive", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n$p = Phar::LoadPhar('bug73764.phar', 'alias.phar');\necho \"OK\\n\";\n} catch(PharException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
