### Uygulamayı localde incelemek ve çalıştırmak için:

Repoyu cloneladıktan ve reponun olduğu klasöre gidip, o path içinde terminal açtıktan sonra;

- Uygulamayı kurmak için: `npm install`,
- Uygulamayı çalıştırmak için: `npm start`,
- Uygulamanın testlerini çalıştırmak için: `npm test` komutlarnı çalıştırınız.

##### Kurulum için gerekli olan paketler

- [Node](https://nodejs.org/en/)

### Uygulamayı Docker ile çalıştırmak için:

Repoyu cloneladıktan ve reponun olduğu klasöre gidip, o path içinde terminal açtıktan sonra;

- Uygulamanın docker tarafında build alması için: `docker build -t studycase .`,
- Uygulamanın docker tarafında çalıştırılması için: `docker run --name studycase -d -p 3000:3000 studycase`,
- Uygulamayı docker tarafında çalışırken browser üzerinde test etmek için: `docker run -it studycase` komutlarını çalıştırınız.

NOT: `studycase` projeyi build alırken dockerda tutulacak isim olduğu için isteğe göre verebilirsiniz.

##### Docker komut açıklamaları:
- -it: interactive mode. Docker interactive mode'da çalışırılabilir.
- --name: Container oluşturulurken deamon, containerımıza random bir isim vermektedir. Bunun yerine --name tagini kullanarak 
  kendi seçtiğimiz bir adı kullanabiliriz.
- -d: detached mode. Docker imageının arkaplanda çalışmasını sağlamış oluruz bu şekilde terminalde container ile ilgili herhangi bir çıktı
  almamış oluruz.
- -p: publish. Docker imageının çalışacağı portu paylaşırız.

#### Bu komutları çalıştırdıktan sonra browserınızda <link>http://localhost:3000</link> adresine gidip uygulamayı deneyimleyebilirsiniz.

##### Kurulum için gerekli olan paketler

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-started/)

> :warning: Docker ile çalışmanız tamamlandığında çalışmayı durdurmak için `docker rm -f studycase`, docker imageını silmek için de `docker rmi -f studycase` komutlarını çalıştırınız.
