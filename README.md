# holiday-calendar-backend
Almanya tatil takvimi backend kısmıdır

## Kurulum Talimatı

Proje dosyalarını bilgisayarınıza kopyaladıktan sonra aşağıdaki adımları izleyin:

### Gereksinimler

- Node.js (v14 veya üstü)

### Adımlar

1. Proje dosyalarını indirin veya klonlayın:
   ```bash
   git clone https://github.com/kubalgul/holiday-calendar-backend.git
   cd holiday-calendar-backend

   
2. Bağımlılıkları Yükleyin:
   ```bash
   npm install
   
3. Sunucuyu başlatmak için aşağıdaki komutu çalıştırın:
   ```bash
   node index.js

4. Bu komut ile sunucu çalışmaya başlayacaktır. Varsayılan olarak, API şu adreste erişilebilir olacaktır:
   ```bash
   http://localhost:5000


5. API'nin çalıştığını doğrulamak için tarayıcıdan veya bir API istemcisinden aşağıdaki adrese bir GET isteği gönderebilirsiniz:
   ```bash
   http://localhost:5000/holidays?country=Almanya&region=Berlin
