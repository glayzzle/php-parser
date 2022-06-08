// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80438.phpt
  it("Bug #80438: imap_msgno() incorrectly warns and return false on valid UIDs in PHP 8.0.0", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__.'/setup/imap_include.inc';\n// create a new mailbox and add 10 new messages to it\n$mail_box = setup_test_mailbox_for_uid_tests('bug80438');\n$message_number_array = imap_search($mail_box, 'ALL', SE_UID);\nvar_dump($message_number_array);\nforeach ($message_number_array as $message_unique_id)\n{\n    echo 'Unique ID: ';\n    var_dump($message_unique_id);\n    echo 'Ordered message number: ';\n    var_dump(imap_msgno($mail_box, $message_unique_id));\n}\nimap_close($mail_box);\n?>")).toMatchSnapshot();
  });
});
