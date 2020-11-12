# **QnA Maker i Azure Bot Service**

QnA maker jest to serwis pozwalający tworzenia i publikowanie zestawu danych konwersacyjnych (zdefiniowane pytania i odpowiadające odpowiedzi). Do określenia tego zestawu można się posłużyć RESTowym API lub SDK. QnA maker posiada wbudowaną analizę języka pomocną przy dostosowaniu pytań postawionych przez rozmówce i dopasowaniu do pary pytania-odpowiedzi. Azure Bot Service jest serwisem – frameworkiem ułatwiającym tworzenie i zarządzanie botów i innych serwisów. Po skonfigurowaniu bota można połączyć go z różnymi kanałami komunikacji m.in.: czatem czy pocztą.

Serwisy te mogą posłużyć do stworzenia:

 - Automatycznej sekretarki,
 - Systemu do wstępnej obsługi klienta – dowiedzieć się co klient
   potrzebuje i przekierować go do odpowiedniego personelu obsługującego
   klientów,
 - Wykonywania automatycznych telefonów do klientów, aby przekazać im
   jedynie informacje wychodzące od dostarczyciela usług.

Pierwszym krokiem było utworzenie obszaru roboczego przypisanego do posiadanej subskrypcji. Następnie wejście na portal Microsoft Azure Machine Learning i wybrać nowopowstały zasób. W portalu stworzono wystąpienie obliczeniowe – maszynę wirtualną obsługującą budowane procesy. Wybrano region, typ maszyny obliczeniowej – procesor CPU oraz rozmiar Standard_D11_v2 z 2 rdzeniami. Następnie stworzony został notes umożliwiający pracę z plikami, folderami i notesami Jupyter. Po przejściu notes automatycznie połączył się z wirtualną maszyną. Za pomocą linku:

>  [https://github.com/MicrosoftDocs/ai-fundamentals](https://github.com/MicrosoftDocs/ai-fundamentals)

 sklonowano pliki „AI fundamentals”.

Kolejnym krokiem było otworzenie QnA Maker portalu, które przekierowało do utworzenia serwisu QnA Maker i bazy wiedzy. Przy tworzeniu serwisu wymagane było stworzenie usługi do indeksowania danych Azure Search (o bezpłatnej warstwie cenowej – 3 indeksy)  i środowisko uruchomieniowe App Service. W portalu QnA Maker przekazujemy zasób QnA Maker, a następnie tworzymy pary pytań i odpowiedzi. Zapisano i uruchomiono opcję trenowania bazy. W QnA portalu stworzono endpoint, który umożliwia odpytanie bazy. Na danej stronie można automatycznie przejść do tworzenia serwisu bota aplikacji internetowej. Atutem tego rozwiązania są już wypełnione potrzebne rubryki związane z podawaniem kluczy, zasobów usługi App Service i lokalizacji. Niestety przy próbie stworzenia zasobu wystąpił błąd ServiceError: AAD App Creation Filed. Dotyczy on braku dostępu do automatycznego, bądź ręcznego tworzenia identyfikatora aplikacji firmy Microsoft.



Warstwa cenowa dla serwisu QnA wygląda następująco:

 - Bezpłatna (F0) – 3 transakcje na sekundę, 100 na minutę i do 50.000
   na miesiąc, ograniczenie dokumentu do 1MB, 3 bezpłatne dokumenty
   zarządzane na miesiąc,
 - Standardowa (S0) – 3 transakcje na sekundę, 100 na minutę, $10 dla
   niegraniczonej liczby zarządzanych dokumentów

# **Bot Framework Composer**

Jest to graficzny interfejs umożliwiający budowanie złożonych botów konwersacyjnych bez konieczności pisania kodu. Takie rozwiązanie ma swoje zalety, m.in.: uproszczony proces tworzenia systemu czy przyspieszony czas tworzenia botów.

Aby korzystać z tej usługi należało pobrać jej aplikację. Należało również pobierać Bot Framework Emulator.

Za pomocą wyżej wspomnianego GUI i dokumentacji dostarczonej przez Azure dodano kolejne funkcjonalności Bota.

