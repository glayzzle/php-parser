// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_010.phpt
  it("SPL: spl_autoload() and prepend", function () {
    expect(parser.parseCode("<?php\nfunction autoloadA($name) {\n    echo \"A -> $name\\n\";\n}\nfunction autoloadB($name) {\n    echo \"B -> $name\\n\";\n}\nfunction autoloadC($name) {\n    echo \"C -> $name\\n\";\n    class C{}\n}\nspl_autoload_register('autoloadA');\nspl_autoload_register('autoloadB', true, true);\nspl_autoload_register('autoloadC');\nnew C;\n?>")).toMatchSnapshot();
  });
});
