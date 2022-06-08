// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_005.phpt
  it("Phar and RecursiveDirectoryIterator", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$fname = str_replace('\\\\', '/', $fname);\n$it = new RecursiveDirectoryIterator('phar://'.$fname);\n$it = new RecursiveIteratorIterator($it);\nforeach($it as $name => $ent)\n{\n    var_dump(str_replace(array('\\\\', $fname), array('/', '*'), $name));\n    var_dump(str_replace(array('\\\\', $fname), array('/', '*'), $ent->getPathname()));\n    var_dump(str_replace('\\\\', '/', $it->getSubPath()));\n    var_dump(str_replace('\\\\', '/', $it->getSubPathName()));\n    $sub = $it->getPathInfo();\n    var_dump(str_replace('\\\\', '/', $sub->getFilename()));\n}\n?>")).toMatchSnapshot();
  });
});
