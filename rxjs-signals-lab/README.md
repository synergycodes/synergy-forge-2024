# Synergy Forge 2024

## Wymagania

- IDE ([Visual Studio Code](https://code.visualstudio.com/), Webstorm etc.)
  - W przypadku VS Code warto zainstalować extension **Angular Language Service**
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download) 
- Angular CLI ```npm i -g @angular/cli@latest```

## Uruchomienie projektu

```
git clone git@github.com:synergycodes/synergy-forge-2024.git

cd synergy-forge-2024/rxjs-signals-lab

npm install

ng serve -o
```

## Zadania

### Zadanie 1

- src/app/labs/lab-1/lab-1.component.ts

Wyślij dwa osobne zapytania HTTP do https://jsonplaceholder.typicode.com/users/{id} po dane dwóch użytkowników za pomocą Async Pipe (część pierwsza) oraz subscribe() (część druga) i wyświetl ich dane przekazując odpowiednie input\'y do komponentów <app-user></app-user>. Pamiętaj o zaimportowaniu AsyncPipe lub CommonModule w imports[] komponentu lab-1.

### Zadanie 2

- src/app/labs/lab-2/lab-2.component.ts

Napraw wyszukiwarkę piłkarzy w której implementacji popełniono dwa błędy. Po pierwsze wyemituj przy użyciu operatora RxJs startWith() domyślną wartość searchControl na starcie subskrypcji. Po tej zmianie zobaczysz wszystkich piłkarzy przy inicjalizacji komponentu (odśwież stronę [F5] dla sprawdzenia). Po drugie, przy pomocy operatora RxJs map() zamień wyszukiwaną frazę w całości na duże litery, w związku z tym, że ktoś błędnie przygotował dane w pliku src/app/consts/footballers.const.ts.

### Zadanie 3

- src/app/labs/lab-3/lab-3.component.ts

Dokończ implementacje przycisku wyświetlającego wiadomość na ekranie. Wykorzystaj kod umieszczony w NotificationService, aby dokonać subskrypcji do BehavioraSubject i emitować do niego wartości.

### Zadanie 4

- src/app/labs/lab-4/lab-4.component.ts

Dokończ implementacje przelicznika walut z dolarów na euro i złotówki. Wykorzystaj wiedzę z zakresu Angular Signals.

### Zadanie 5*

- src/app/labs/lab-5/lab-5.component.ts

Zaimplementuj filtrowanie piłkarzy na podstawie dwóch zmiennych wartości wybieranych przez użytkownika - kraj oraz klub.
