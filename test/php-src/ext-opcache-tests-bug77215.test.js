// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77215.phpt
  it("Bug #77215: CFG assertion failure on multiple finalizing switch frees in one block", function () {
    expect(parser.parseCode("<?php\nfunction _crash($eValeur) {\n    switch ($eValeur[\"a\"]) {\n        default:\n            switch($eValeur[\"a\"]) {\n                default:\n                    return 2;\n            }\n    }\n}\nvar_dump(_crash([\"a\" => \"b\"]));\n?>")).toMatchSnapshot();
  });
});
