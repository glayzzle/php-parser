// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/002.phpt
  it("Phar::mapPhar truncated manifest/improper params", function () {
    expect(parser.parseCode("<?php\ntry {\n    Phar::mapPhar(5, 'hio', 'hi');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Phar::mapPhar();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n__HALT_COMPILER(); ?>")).toMatchSnapshot();
  });
});
