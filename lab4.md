**Computer Vision API**

Face API

Serwis ten poddaje dane wejściowe 5 kategoriom badawczym:

- weryfikacji prawdopodobieństwa czy twarz na zdjęciu się nie powtarza,
- detekcji ludzkiej twarzy w obrazie,
- identyfikacja owych twarzy,
- podobieństwo twarzy,
- grupowanie twarzy w grupy na podstawie wizualnego podobieństa.

Face api może posłużyć do:
- detekcji aktywności osoby na zdjęciu,
- znalezienia i porównania twarzy ze zdjęcia z już posiadanym z bazie,
- znalezienie twarzy i podanie jej koordynatów,
- znalezienie i analiza twarzy w nagraniach wideo.

Serwis potrafi określić takie atrybuty jak:
- wiek,
- płeć,
- poziom uśmiechu,
- owłosienie,
- pozycja głowy w 3d,
- emocje na twarzy.

W działaniu serwisu pomocne jest zagadnienie face lists, czyli podział na grupę ludzi. W niej znajdują się poszczególne osoby, a do nich przypisana jest lista twarzy.

Emotion API

Również część Computer Vision API. W odpowiedzi daje (umożliwione) w formacie JSON lokalizację twarzy oraz punktację zestawu emocji z zakresu 0-1, m. in.: gniew, obrzydzenie, radość, neutralność, zaskoczenie, smutek.

**Computer Vision Service**

Jest to zestaw algorytmów udostępnionych jako serwis. Algorytmy te służą procesowaniu obrazów pod różnymi kątami i zwrócenie odpowiednich danych.

Przykładem tego może być:
- analizowanie obrazów do ekstrakcji danych ogólnych,
- ekstrakcja tekstu z obrazu (OCR),
- rozpoznanie tekstu ręcznie pisanego,
- rozpoznanie krajobrazu, znanych twarzy,
- analiza wideo,
- stworzenie miniatury obrazu.

Azure CLI

Jest to platforma do zarządzania zasobami azure’a. Aby go użyć w terminalu azura należy uprzedzić komendy treścią ‘az’. W samouczku sugerowane jest stworzenie serwisu Computer Vision za pomocą Azure cli, gdyż wersja ta jest wersją sandboxową (do nauki w danym momencie). Serwis nie jest rejestrowany w zasobach danego użytkownika. Tworzenie z poziomu interfejsu portalu pozwala na stworzenie serwisu Computer Vision na stałe i przypisanie go do subskrypcji i grupy zasobów.

**Custom Vision Service**

Serwis służący do klasyfikacji obiektów na podstawie nauczonych już elementów. Przykładem może być klasyfikacja jakie zwierzę jest przedstawione na zdjęciu. Żeby to było możliwe uprzednio należy przetrenować sieć, dając jej zestaw odpowiednio opisanych zdjęć ze zwierzętami. Microsof Azure umożliwia z korzystania z tego serwisu za pomocą odpowiedniej aplikacji webowej dostępnej na: [https://www.customvision.ai/]. Pierwszym krokiem jest dodanie (upload) zdjęć i określenie ich odpowiednimi tagami z nimi związanymi. Następnie następuje proces trenowania sieci neuronowej. Tutaj jest możliwość szybkiego trenowania lub zaawansowanego, wymagającego dłuższego czasu i odpowiedniej kwoty za ten zabieg. Na wyuczonej sieci można dokonywać testów oraz dokonywać klasyfikacji.

**Custom Vision API**

Służy do integracji serwisu z siecią do rozpoznawania obrazów i własną aplikacją chcącą wykorzystać dany serwis. Komunikacja umożliwiona jest za pomocą RESTowego API.

**Video Indexer Service**

Serwis ten umożliwie analizę filmów za pomocą ekstrakcji cech/parametrów. Na potrzeby nauki Azure umożliwia próbkę testową serwisu pozwalająca na indeksowanie 600 minut po przez Azure Indexer Portal, lub 2400 darmowych minut używając API. Serwis ten potrafi wydobyć z wrzuconego filmu takie informacje (przedstawione w parametrze ‘insights’) jak:

- wypowiedzi jako linie tekstu z początkiem i końcem ich trwania,
- ocr – detekcja tekstu pojawiającego się na obrazie,
- keywords (słowa kluczowe) – wyekstrahowane z mowy i tekstu,
- labels (etykiety) – m. in. zidentyfikowane obiekty, czynności,
- faces (twarze) – rozpoznane twarze w filmie,
- sentiments (nastawienie) – czy film był pozytywny, negatywny, neutralny, wraz z punktacją,
- emotions (emocje) – emocje wykryte z wypowiedzi i wizualnego aspektu filmu.



