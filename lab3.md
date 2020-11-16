# **Speech service**

Jest to serwis umożliwiający wprowadzenie nagrania wypowiedzi pewnej osoby i otrzymanie transkrypcji danego nagrania w postaci tekstu. Możliwe jest także syntezowanie wypowiedzi na podstawie tekstu oraz tłumaczenia wypowiedzi. Serwis ten jest usługą real time – na bieżąco przetwarza dane. Dzięki temu może służyć do:

 - tłumaczenia rozmów na bieżąco,
 - asysty klienta poprzez zamianę mowy na tekst, analizowanie w bazie
   wiedzy QnA i generowanie odpowiedzi w formie dźwiękowej,
 - generowanie napisów pod filmami/prezentacjami.

Cennik tego serwisu jest rozbudowany ze względu na to jaką usługę ma dostarczyć:

Bezpłatna wersja oferuje:

 - zamiana mowy na tekst – do 5h na miesiąc
 - zamiana tekstu na mowę – 5mln. znaków na miesiąc w funkcji standard,
   dla neuronowej do 0.5mln,
 - tłumaczenie mowy – 5 bezpłatnych godzin.

Standardowa wersja oferuje:

 - zamiana mowy na tekst – standard funkcja $1 za godzinę audio,
   niestandardowe $1,4
 - zamiana tekstu na mowę - $4 za 1 mln znaków dla funkcji standardowej,
   dla neuronowej $6 za 1 mln znaków,
 - tłumaczenie mowy - $2,5 za godzinę

Wersja płatna umożliwia jednoczesną obsługę 20 żądań, bezpłatna – jednej. Wykorzystanie sieci neuronowych.

Należało utworzyć lokalnie plik i za pomocą odpowiedniej biblioteki azure.cognitiveservices i metod obiektu speech można dokonać zamiany tekst na dźwięk i odwrotnie. Aby operacje się powiodły niezbędne było podanie w parametrach klucza autoryzacji serwisu i regionu lokalizacji.
