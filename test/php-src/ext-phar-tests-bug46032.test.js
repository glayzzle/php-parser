// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug46032.phpt
  it("Phar: bug #46032: PharData::__construct wrong memory read", function () {
    expect(parser.parseCode("<?php\n$a = __DIR__ .'/mytest';\ntry {\n    new phar($a);\n} catch (exception $e) { }\nvar_dump($a);\ntry {\n    new phar($a);\n} catch (exception $e) { }\nvar_dump($a);\nnew phardata('0000000000000000000');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
