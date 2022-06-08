// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_kana.phpt
  it("Testing mb_convert_kana() function", function () {
    expect(parser.parseCode("<?php\n$zenKakuA    =\t'ァアィイゥウェエォオカガキギク';\n$zenKakuB    =\t'グケゲコゴサザシジスズセゼソゾタ';\n$zenKakuC    =\t'ダチヂッツヅテデトドナニヌネノハ';\n$zenKakuD    =\t'バパヒビピフブプヘベペホボポマミ';\n$zenKakuE    =\t'ムメモャヤュユョヨラリルレロヮワ';\n$zenKakuF    =\t'ヰヱヲンヴヵヶヷヸヹヺ・ーヽヾ';\n$hanKakuA    =\t'｠｡｢｣､･ｦｧｨｩｪｫｬｭｮｯ';\n$hanKakuB    =\t'ｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ';\n$hanKakuC    =\t'ﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏ';\n$hanKakuD    =\t'ﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ';\necho $zenKakuA . ' => ' . mb_convert_kana($zenKakuA, 'AZKH', 'utf-8');\necho \"\\n\";\necho $zenKakuB . ' => ' . mb_convert_kana($zenKakuB, 'azkh', 'utf-8');\necho \"\\n\";\necho $zenKakuC . ' => ' . mb_convert_kana($zenKakuC, 'azkh', 'utf-8');\necho \"\\n\";\necho $zenKakuD . ' => ' . mb_convert_kana($zenKakuD, 'azkh', 'utf-8');\necho \"\\n\";\necho $zenKakuE . ' => ' . mb_convert_kana($zenKakuE, 'azkh', 'utf-8');\necho \"\\n\";\necho $zenKakuF . ' => ' . mb_convert_kana($zenKakuF, 'azkh', 'utf-8');\necho \"\\n\";\necho \"\\n\";\necho $hanKakuA . ' => ' . mb_convert_kana($hanKakuA, 'AZKH', 'utf-8');\necho \"\\n\";\necho $hanKakuB . ' => ' . mb_convert_kana($hanKakuB, 'AZKH', 'utf-8');\necho \"\\n\";\necho $hanKakuC . ' => ' . mb_convert_kana($hanKakuC, 'AZKH', 'utf-8');\necho \"\\n\";\necho $hanKakuD . ' => ' . mb_convert_kana($hanKakuD, 'AZKH', 'utf-8');\n?>")).toMatchSnapshot();
  });
});
