// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchmime_errors.phpt
  it("imap_fetchmime() errors: ValueError and Warnings", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox(\"imapfetchmimeerrors\", 0);\n$section = '';\ntry {\n    imap_fetchmime($imap_mail_box, -1, $section);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    imap_fetchmime($imap_mail_box, 1, $section, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// Access not existing\nvar_dump(imap_fetchmime($imap_mail_box, 255, $section));\nvar_dump(imap_fetchmime($imap_mail_box, 255, $section, FT_UID));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
