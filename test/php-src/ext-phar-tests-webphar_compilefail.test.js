// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/webphar_compilefail.phpt
  it("Phar: Phar::webPhar, open compiled file fails", function () {
    expect(parser.parseCode("<?php\ntry {\nPhar::webPhar('oopsiedaisy.phar', '/index.php');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n__HALT_COMPILER();\n?>")).toMatchSnapshot();
  });
});
