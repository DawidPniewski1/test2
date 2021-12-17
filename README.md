## run mysal + baza 'test2'

problem z migracjami -

odpalalem yarn run typeorm migration:generate -n User -d src/migration

Niestety czasu nie wystarczyło, dostawałem błąd
Cannot use import statement outside a module

Wzorowałem się na - https://github.com/typeorm/typeorm/blob/master/docs/migrations.md

Nigdy wcześniej z migracji nie korzytałem - nie było produkcji :)

## aktualnie baza same sie automatycznie aktualizuje - migracje zakomentowane.
