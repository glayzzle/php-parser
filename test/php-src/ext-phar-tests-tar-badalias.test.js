// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/badalias.phpt
  it("Phar: invalid aliases", function () {
    expect(parser.parseCode("<?php\n$e = __DIR__ . '/files/';\nfor ($i = 1; $i <= 5; $i++) {\ntry {\nnew Phar($e . \"badalias$i.phar.tar\");\n} catch (Exception $ee) {\necho $ee->getMessage(), \"\\n\";\n}\n}\n?>")).toMatchSnapshot();
  });
});
