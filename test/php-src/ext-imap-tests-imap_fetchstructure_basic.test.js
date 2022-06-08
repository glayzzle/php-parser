// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchstructure_basic.phpt
  it("imap_fetchstructure() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = setup_test_mailbox('imapfetchstructurebasic', 1);\ntry {\n    imap_fetchstructure($stream_id,0);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$z = imap_fetchstructure($stream_id,1);\n$fields = array('type','encoding','ifsubtype','subtype',\n'ifdescription','lines','bytes','parameters');\nforeach ($fields as $key) {\n    var_dump(isset($z->$key));\n}\nvar_dump($z->type);\nvar_dump($z->encoding);\nvar_dump($z->bytes);\nvar_dump($z->lines);\nvar_dump($z->ifparameters);\nvar_dump(is_object($z->parameters[0]));\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
