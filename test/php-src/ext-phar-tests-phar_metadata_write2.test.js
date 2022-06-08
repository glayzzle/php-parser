// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_metadata_write2.phpt
  it("Phar with object in metadata", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont' => 'a');\ninclude 'files/phar_test.inc';\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n$phar = new Phar($fname);\nvar_dump($phar->getMetadata());\n$phar->setMetadata((object) ['my' => 'friend']);\nunset($phar);\n// NOTE: Phar will use the cached value of metadata if setMetaData was called on that Phar path before.\n// Save the writes to the phar and use a different file path.\n$fname_new = \"$fname.copy.php\";\ncopy($fname, $fname_new);\n$phar = new Phar($fname_new);\nvar_dump($phar->getMetadata());\n?>")).toMatchSnapshot();
  });
});
