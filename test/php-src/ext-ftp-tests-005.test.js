// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/005.phpt
  it("FTP with bogus server responses", function () {
    expect(parser.parseCode("<?php\n$bogus = 1;\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'anonymous', 'mail@example.com'));\nvar_dump(ftp_alloc($ftp, 400));\nvar_dump(ftp_cdup($ftp));\nvar_dump(ftp_chdir($ftp, '~'));\nvar_dump(ftp_chmod($ftp, 0666, 'x'));\nvar_dump(ftp_delete($ftp, 'x'));\nvar_dump(ftp_exec($ftp, 'x'));\ntry {\n    ftp_fget($ftp, STDOUT, 'x', 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ftp_fput($ftp, 'x', fopen(__FILE__, 'r'), 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ftp_get($ftp, 'x', 'y', 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(ftp_mdtm($ftp, 'x'));\nvar_dump(ftp_mkdir($ftp, 'x'));\nvar_dump(ftp_nb_continue($ftp));\ntry {\n    ftp_nb_fget($ftp, STDOUT, 'x', 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ftp_nb_fput($ftp, 'x', fopen(__FILE__, 'r'), 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(ftp_systype($ftp));\nvar_dump(ftp_pwd($ftp));\nvar_dump(ftp_size($ftp, ''));\nvar_dump(ftp_rmdir($ftp, ''));\n?>")).toMatchSnapshot();
  });
});
