// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchstructure_errors.phpt
  it("imap_fetchstructure() errors: ValueError and Warnings", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox(\"imapfetchstructureerrors\", 0);\ntry {\n    imap_fetchstructure($imap_mail_box, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    imap_fetchstructure($imap_mail_box, 1, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// Access not existing\nvar_dump(imap_fetchstructure($imap_mail_box, 255));\nvar_dump(imap_fetchstructure($imap_mail_box, 255, FT_UID));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
