# Azure Content Moderator

Jest to usługa pozwalająca na (jak sama nazwa przedstawia) moderowanie treści wykorzystywanych w systemie w którym się znajduje. Można oceniać, akceptować, bądź blokować teksty przechodzące przez daną usługę.

Wykorzystywać tę opcję można przy panelach dyskusyjnych/forach, rozmowach, chatbotach, sprawdzaniu treści w plikach. Posłużyć może do:

 - Profanity - cenzury przekleństw i obraźliwych słów,
 - Classification - klasyfikowanie treści ze względu na charakter
   treści (wykorzystanie treści agresywnych, seksualnych), np. w celach
   dostosowania do grupy wiekowej,
 - Personally identifiable information - rozpoznawanie danych
   personalnych (adres email, adres strony, adres IP), np. w celu
   ostrzegania przed dzieleniem się danych poufnych, czy zaznaczanie
   odnośników.

W podstawowej warstwie cenowej do wyboru jest:

 - F0 – bezpłatne – 1 wywołanie na sekundę,
- S0 – standardowa – 10 wywołań na sekundę,

W szczegółach cennika dla najbliższego regionu (Europa Zachodnia), widnieje: dla subskrypcji darmowej można wykonać 5000 transakcji miesięcznie. Dla oferty S0 od 0 do 1mln transakcji $1 za 1000 transakcji, powyżej miliona operacji koszt na 1000 transakcji się zmniejsza.

W adresie podanym z portalu azure znajduje się interfejs pomagający konfigurować moderatora kontentu ze względu na to, jakie opcje mają być włączone i wyczulone na jaki zestaw danych, np. można dodać listę wyrazów do cenzury listId dla profanity.

[https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66f](https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66f)

Poniżej znajduje się wygenerowany http request na podstawie wypełnionego szablonu:

```
POST https://westeurope.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=false HTTP/1.1
Host: westeurope.api.cognitive.microsoft.com
Content-Type: text/plain
Ocp-Apim-Subscription-Key: ••••••••••••••••••••••••••••••••
Is this a crap email abcdef@abcd.com, phone: 6657789887, IP: 255.255.255.255, 1 Microsoft Way, Redmond, WA 98052
```


# Language Understanding Intelligent Service

Owy serwis – LUIS służy do inteligentnej interakcji z użytkownikiem. Azure umożliwia stworzenie sztucznej inteligencji do konwersacji dla chat-bota poprzez przewidywanie kontekstu z wiadomości użytkownika i ekstrahowaniu ważnych informacji. LUIS wykorzystuje 3 podstawowe aspekty analizy tekstu do rozmowy:

 - całościowego tekstu do interpretacji,
- zamiarów – akcji do której dąży rozmówca,
- wyrażenia jako osobnych wartości wartych do wyekstrahowania z całości tekstu.

Poniżej przedstawione są przykładowe przypadki zastosowań:

- użytkownik sklepu chce się dowiedzieć o historii zamówień,
- petent urzędowy chciałby się dowiedzieć na stronie jakie kroki musi podjąć, aby złożyć konkretny dokument,
- użytkownik portalu chciałby otrzymać kontakt do wsparcia technicznego danej usługi,
- użytkownik portalu chciałby się dowiedzieć o ścieżkach złożenia reklamacji.

Warstwy cenowe dla tego serwisu położonego w Europie Zachodniej:

- F0 – bezpłatna. Oznacza to do 5 wywołań na sekundę, do 1 miliona wywołań na miesiąc.
- S0 – standardowa. 50 wywołań na sekundę.

Opcja bezpłatna oferuje do miliona transakcji, a dla żądań tekstowych do 10000 transakcji. Zaś wersja standardowa oferuje $1,5 za 1000 transakcji za żądania tekstowe i $5,50 za żądania wymawiane.
Na stan dzisiejszy nie jest możliwe wybranie opcji S0 dla 3 możliwych Lokalizacji dla tego zasobu.
Przy tworzeniu zasobu jest dodana rubryka „zasób przewidywania” z potencjalnymi przyszłymi lokalizacjami i potencjalnie umożliwioną ofertą S0.

Portal azure podaje adresy poszczególnych lokalizacji w których znajdują się interface’y pomagające
w tworzeniu aplikacji LUIS.

Zasadą  tworzenia jest określenie wcześniej wspomnianych 3 aspektów analizy jako całości służącej do rozpoznania konkretnego celu.

Pierwszym etapem jest opisanie potencjalnego zamiaru rozmówcy. Następnie wprowadzamy symulację, gdzie podajemy potencjalne wpisy, które użytkownik mógłby wprowadzić, aby na końcu zaznaczyć na nich konkretne wyrażenia należące do jednej grupy (entities). Przypisać je można jako listę synonimów, np. dla Entity „time” znaleźć się może: time, hour, minute, when. Bazować można także na złożonych wpisach, np. z wpisu „ 1 first class Warsaw” dla Entity „ticket” można wyekstrahować, że chodzi o bilet – sztuk jeden, w pierwszej klasie do Warszawy.

# Text Analytics API

Serwis ten służy do grupowania wpisów względem ich treści. Przykładem podanym na portalu azure jest analiza tonacji i intencji treści wprowadzonych przez użytkownika. Serwis ten ułatwia wyodrębnienie informacji związanych z przedstawioną treścią. Klasyfikuje ją na pozytywne,  negatywne oraz neutralne wpisy. Serwis oferuje również takie usługi jak rozpoznanie języka czy wyodrębnienie kluczowych fraz/wyrazów.

Można wykorzystać tę usługę w celach:

- Analiza tonu reklamacji,
- Analiza tonu wpisów na portalach społecznościowych,
- Analiza tonu wiadomości użytkowników,
- Wyodrębnienie hashtagów na podstawie wpisu na portalu społecznościowym,
- Rozpoznanie dialektu w jakim użytkownik się porozumiewa, aby zaproponować mu zmianę tłumaczenia strony.


Warstwy cenowe dla tego serwisu położonego w Francji środkowej:

- F0 – bezpłatna do 5.000 transakcji na miesiąc,
- S – standardowa do 1.000 wywołań na minutę,
- S0 – standardowa do 25.000 transakcji na miesiąc,
- S1-S4 – standardowe 100.000 do 10.000.000 transakcji za miesiąc.


W funkcjach warstw umożliwione są: analiza tonacji, wyodrębnienie kluczowych fraz, wykrywanie języka, rozpoznawanie jednostek znaku.

Aby wdrożyć aplikację również i w tym przypadku portal Azure udostępnia link z interfacem umożliwiającym konfigurację i generowanie CURLa. Po lewej stronie wybrać można jakiego aspektu analiza ma dotyczyć, np. tonację wypowiedzi. Następnie określa się lokalizację zasobu, opcjonalne dodanie parametrów i klucz do osobistego zasobu z serwisem. Poniżej przedstawione jest przykładowe ciało zapytania ukazujące jak wygląda jego struktura.

Na podstawie tak wygenerowanego zapytania:
```
POST https://francecentral.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment HTTP/1.1
Host: francecentral.api.cognitive.microsoft.com
Content-Type: application/json
Ocp-Apim-Subscription-Key: ••••••••••••••••••••••••••••••••
{
  "documents": [
    {
      "language": "en",
      "id": "1",
      "text": "I hate it thah i don't like it."
    },
    {
      "language": "fr",
      "id": "2",
      "text": "Bonjour tout le monde"
    }
  ]
}
```
Uzyskano taką odpowiedź:
```
Transfer-Encoding: chunked
csp-billing-usage: CognitiveServices.TextAnalytics.BatchScoring=2
x-envoy-upstream-service-time: 9
apim-request-id: 0a8ed12e-53b5-4259-9048-9eb9c58cea4f
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
Date: Tue, 03 Nov 2020 23:09:32 GMT
Content-Type: application/json; charset=utf-8
{
  "
 "id": "1",
 "score": 0.0064200460910797119
 }, {
 "id": "2",
 "score": 0.84012651443481445
 }]`,`
  "
}
```

Wartość bliska zera klasyfikowana jest jako negatywna, bliska 1 – pozytywna.

