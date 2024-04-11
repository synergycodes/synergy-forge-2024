import { RouteUrl } from "../../app.enums";

export const DESCRIPTION: Record<RouteUrl, { title: string, file: string, content: string }> = {
    [RouteUrl.LAB_1]: {
        title: 'Zadanie 1 - AsyncPipe vs subscribe()',
        file: 'src/app/labs/lab-1/lab-1.component.ts',
        content: 'Wyślij dwa osobne zapytania HTTP do https://jsonplaceholder.typicode.com/users/{id} po dane dwóch użytkowników za pomocą Async Pipe (część pierwsza) oraz subscribe() (część druga) i wyświetl ich dane przekazując odpowiednie input\'y do komponentów <app-user></app-user>. Pamiętaj o zaimportowaniu AsyncPipe lub CommonModule w imports[] komponentu lab-1.',
    },
    [RouteUrl.LAB_2]: {
        title: 'Zadanie 2 - RxJs operators',
        file: 'src/app/labs/lab-2/lab-2.component.ts',
        content: '',
    },
    [RouteUrl.LAB_3]: {
        title: 'Zadanie 3 - RxJs BehaviorSubject',
        file: 'src/app/labs/lab-3/lab-3.component.ts',
        content: 'Dokończ implementacje przycisku wyświetlającego wiadomość na ekranie. Wykorzystaj kod umieszczony w NotificationService, aby dokonać subskrypcji do BehavioraSubject i emitować do niego wartości.',
    },
    [RouteUrl.LAB_4]: {
        title: 'Zadanie 4 - Signals API',
        file: 'src/app/labs/lab-4/lab-4.component.ts',
        content: 'Dokończ implementacje przelicznika walut z dolarów na euro i złotówki. Wykorzystaj wiedzę z zakresu Angular Signals.',
    },
    [RouteUrl.LAB_5]: {
        title: 'Zadanie 5 - ',
        file: 'src/app/labs/lab-5/lab-5.component.ts',
        content: '',
    },
}
