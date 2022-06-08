// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strimwidth.phpt
  it("mb_strimwidth()", function () {
    expect(parser.parseCode("<?php\n// TODO: Add more encoding\n// EUC-JP\n$euc_jp = '0123����ʸ��������ܸ�Ǥ���EUC-JP��ȤäƤ��ޤ������ܸ�����ݽ�����';\nprint \"String width: \".mb_strwidth($euc_jp,'EUC-JP').\"\\n\";\nprint  \"1: \". mb_strimwidth($euc_jp,  0, 15,'...','EUC-JP') . \"\\n\";\nprint  \"2: \". mb_strimwidth($euc_jp,  0, 100,'...','EUC-JP') . \"\\n\";\nprint  \"3: \". mb_strimwidth($euc_jp, 15, 100,'...','EUC-JP') . \"\\n\";\nprint  \"4: \". mb_strimwidth($euc_jp, -30, 5,'...','EUC-JP') . \"\\n\";\nprint  \"5: \". mb_strimwidth($euc_jp, 38, 5,'...','EUC-JP') . \"\\n\";\nprint  \"6: \". mb_strimwidth($euc_jp, 38, -25,'...','EUC-JP') . \"\\n\";\nprint  \"7: \". mb_strimwidth($euc_jp, -30, -25,'...','EUC-JP') . \"\\n\";\ntry {\n    var_dump(mb_strimwidth($euc_jp, 0, -100,'...','EUC-JP'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_strimwidth($euc_jp, 100, 10,'...','EUC-JP'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_strimwidth($euc_jp, -100, 10,'...','EUC-JP'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_strimwidth($euc_jp, -10, -12,'...','EUC-JP'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
