// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug38698.phpt
  it("Bug #38698 (Bug #38698 for some keys cdbmake creates corrupted db and cdb can't read valid db)", function () {
    expect(parser.parseCode("<?php\nfunction isLittleEndian() {\n    return 0x00FF === current(unpack('v', pack('S',0x00FF)));\n}\n$db_file = __DIR__ .'/129php.cdb';\nif (($db_make=dba_open($db_file, \"n\", 'cdb_make'))!==FALSE) {\n    if (isLittleEndian() === FALSE) {\n        dba_insert(pack('V',129), \"Booo!\", $db_make);\n    } else{\n        dba_insert(pack('i',129), \"Booo!\", $db_make);\n    }\n    dba_close($db_make);\n    // write md5 checksum of generated database file\n    var_dump(md5_file($db_file));\n    @unlink($db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
