# Merge Sort Projesi

## [16,21,11,8,12,22] -> Merge Sort



+ Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
~~~
İlk olarak dizi ikiye bölünmelidir.

[16,21,11] ve [8,12,22] 

Tek Eleman kalıncaya kadar bölünmeye devam edilir.

[16],[21,11] ve [8],[12,22]

[16]  [21]  [11]  [8]  [12]  [22]

Küçükten büyüğe birleştirme işlemi yapılır.

[16]  [11,21]  [8]  [12,22]

[11,16,21]  [8,12,22]

[8,11,12,16,21,22]

~~~

+ Big-O gösterimini yazınız
~~~

Big O notation gösterimi : Sürekli 2'ye bölündüğü için O(nlogn).

~~~

 