// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_buffer_basic-mb.phpt
  it("Test finfo_buffer() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic私はガラスを食べられます';\n$options = array(\n    FILEINFO_NONE,\n    FILEINFO_MIME,\n);\n$buffers = array(\n    \"Regular string here\",\n    \"\\177ELF\",\n    \"\\000\\000\\0001\\000\\000\\0000\\000\\000\\0000\\000\\000\\0002\\000\\000\\0000\\000\\000\\0000\\000\\000\\0003\",\n    \"\\x55\\x7A\\x6E\\x61\",\n    \"id=ImageMagick\\x0a\\x0c\\x0a:\\x1a\",\n    \"RIFFüîò^BAVI LISTv\",\n);\necho \"*** Testing finfo_buffer() : basic functionality ***\\n\";\nforeach( $options as $option ) {\n    $finfo = finfo_open( $option, $magicFile );\n    foreach( $buffers as $string ) {\n        var_dump( finfo_buffer( $finfo, $string, $option ) );\n    }\n    finfo_close( $finfo );\n}\n?>")).toMatchSnapshot();
  });
});
