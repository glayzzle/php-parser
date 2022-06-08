// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/032.phpt
  it("Phar: require hash", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 0;\nrequire_once 'files/phar_oo_test.inc';\ntry {\nPhar::loadPhar($fname);\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
