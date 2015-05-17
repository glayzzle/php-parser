<?php

$fallbackContent .= sprintf(<<<EOF2
\$catalogue%s = new MessageCatalogue('%s', %s);
\$catalogue%s->addFallbackCatalogue(\$catalogue%s);
EOF2
);

/* @todo : should pass : */
  $js =<<<"EOJ"
  Yo man
EOJ
    . "text";

    $opml = <<<EOF1
   text="{$feeds[0]['title[0][value]']}"
EOF1;

  $expected = <<<'EXPECTED'
$no_index_value_scalar = TRUE;
$no_index_value_foo['foo']['value'] = NULL; // comment
EXPECTED
;

