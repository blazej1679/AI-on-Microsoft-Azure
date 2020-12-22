# **Computer Vision**
Sprawozdanie z laboratoryjnego projektu obejmującego przetwarzanie i analizę obrazu. W moim przypadku jest to serwis związany z klasyfikacją czy osoby na zdjęciu posiadają maski.

Użyte zostały serwisy typu Cognitive Services związane z rozpoznaniem twarzy na zdjęciu, podaniem jego lokalizacji i innych parametrów, między innymi emocji czy uśmiechu (w moim przypadku parametry nie są wymagane) oraz klasyfikator obrazów ze względu na istnienie maski na wcześniej przefiltrowanym elemencie.

Do pierwszego serwisu za pomocą aplikacji napisanej w Angularze wysyłam  zapytanie metodą POST z adresem zdjęcia i niezbędnymi danymi (klucz dostępu do serwisu). W odpowiedzi otrzymuje lokalizację twarzy na obrazie. Wycięty skrawek obrazu, który posiada twarz jest wprowadzany do drugiego, wcześniej wytrenowanego innymi zdjęciami, serwisu. On dokonuje klasyfikacji, przydzielając zdjęcie do grupy osoby z maską bądź bez maski.


Adres url do nagrania ze sprawozdaniem:
https://youtu.be/p6iJ16w-8EY