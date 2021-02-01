
**Azure Machine Learning**

Jest to serwis wykorzystywany do tworzenia i zarządzania modelami sztucznej inteligencji. Posiada wiele narzędzi ułatwiających procesowanie danych, tworzenie i trenowanie modelu oraz ich reprezentacje wraz z monitorowaniem ich użycia. Obsługę tego serwisu ułatwia portal ml.azure.com. Pozwala na tworzenie wirtualnych maszyn do tworzenia sieci i wykonywania obliczeń, wgrywania, przechowywania i nadzorowania zestawami danych. Wytrenowany model można dystrybuować i używać go jako serwis – Azure Container Instances.

**Machine Learning Designer**

Jest to część portalu ml.azure.com pozwalającego na graficzną obsługę tworzenia odpowiednich modeli sztucznej inteligencji. Tak jak w wielu graficznych interface’ach Azure’a  tworzenie umożliwione jest poprzez łączenie odpowiednich bloków obsługujących kolejne etapy działania i ich konfiguracje. Taki blokami są m.in.: wprowadzenie zestawu danych, wydzielenie interesujących kolumn, czyszczenie, czy uzupełnianie brakujących danych, normalizacja, trenowanie modelu itd.

**Model Regresji z designerem Machine Learning**

Regresja jest metodą uczenia maszynowego (nadzorowanego – gdzie parametry wejściowe są zestawione z wynikami) służącą do przewidywania wartości liczbowej wyjścia na podstawie parametrów wejściowych. Przykładem tego może być ocena wartości auta na podstawie szeregu parametrów, m.in. z jakich części się składa.

**Model Klasyfikacji z designerem Machine Learning**

Klasyfikacja jest również metodą uczenia maszynowego nadzorowaną, która pozwala na przydzielenie zestawu nowych danych do pewnej kategorii, klasy. Zasugerowanym przykładem jest przewidzenie czy osoba posiadająca zestaw parametrów związanych ze zdrowiem jest zagrożona posiadaniem konkretnej choroby np. cukrzycy. W tym przypadku również do stworzenia sieci neuronowej, jej nauki i wdrożenia wykorzystać można graficzny interfejs designera. Tworzenie modelu odbywa się za pomocą drag and dropów, łączenia bloków operacji i uzupełniania niezbędnych informacji. Zaprezentować ocenę jakości klasyfikacji można za pomocą popularnej macierzy błędów/tablicy pomyłek, gdzie przedstawione są liczby pozytywnie zakwalifikowanych elementów, błędnie zakwalifikowanych elementów, poprawnie niezakwalifikowanych elementów i błędnie niezakwalifikowanych elementów.

**Model Klastrowania z designerem Machine Learning**

W tym przypadku model klastrów jest modelem uczenia nienadzorowanego. Oznacza to, że dane uczące posiadają jedynie parametry wejściowe, a nie posiadają danych, które sugerują wyniku do jakiej grupy dany obiekt przynależy. Przykładem może być zestaw danych, które należy sklasyfikować do odrębnych grup (klastrów), w tutorialu takim zestawem danych były obrazki kwiatów, które były pogrupowane względem ich kształtów i sposobu ich obrazowania. Drugim przykładem było pogrupowanie obrazków pingwinów ze względu na zestawienie mozaiki kolorów białego i czarnego na ich ciele.

Dla każdej z sieci po procesie uczenia należało w pewnym stopniu przebudować sieć, aby była dostosowana do danych nie ze zbiory wcześniej przygotowanego, a do danych nie znanych wcześniej sieci.