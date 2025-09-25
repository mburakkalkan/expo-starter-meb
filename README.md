# Expo Starter MEB ⚛️

## 🚀 Proje Tanıtımı

**Expo Starter MEB**, MEB'e bağlı okullarda sorunsuz çalışacak şekilde özel olarak hazırlanmış, modern ve ölçeklenebilir bir React Native başlangıç projesidir. Proje, güncel tasarım standartlarına uygun olup yüksek donanım gereksinimi olmadan çoklu platformda hızlı geliştirme ve kolay özelleştirme imkanı sunar.

📱 MTAL Bilişim Teknolojileri Alanı'nın **Mobil Uygulamalar** dersinde kullanıma uygundur. Web Tabanlı Uygulamalar dersiyle güçlü bir paralellik kurar. Özellikle React Native'in HTML ve CSS'e çok yakın sözdizimi sayesinde öğrenciler, mobil ve web konseptlerini karşılaştırmalı ve bütüncül bir şekilde öğrenebilir. Bir derste edindikleri bilgileri diğerine kolayca transfer edebilir ve böylece iki ders birbirini doğal olarak destekler hale gelir.

### ✨ Başlıca Özellikler

-   🌐 **Gerçek Cross-Platform Geliştirme**: React Native ile tek bir kod tabanından hem Android hem de iOS için (ve Expo ile web için de) uygulama geliştirebilirsiniz. Böylece platform bağımsız, geniş kitlelere ulaşan projeler üretebilirsiniz.
-   🚀 **Güncel Expo SDK**: Proje, en son sürüm Expo SDK ile uyumlu olarak geliştirilmiştir. Böylece en yeni özelliklerden ve performans iyileştirmelerinden faydalanabilirsiniz.
-   🛡️ **MEB Sertifikası Desteği**: Proje, MEB ağına bağlı cihazlarda güvenli bağlantı için gerekli olan MEB kök sertifikasını otomatik olarak içerir ve uygular. Böylece ağ kısıtlamalarından etkilenmeden uygulamanız çalışır.
-   🎨 **NativeWind ile Tailwind CSS Desteği**: NativeWind sayesinde, React Native projelerinde Tailwind CSS'in gücünü ve esnekliğini kullanabilirsiniz. Hızlı prototipleme ve tutarlı stil yönetimi sağlar.
-   🧩 **React Native Paper ile Modern UI**: Google'ın Material Design prensiplerine uygun, erişilebilir ve şık arayüzler için React Native Paper entegre edilmiştir.
-   ⚡ **Live Reload (Canlı Yenileme)**: Kodda yaptığınız değişiklikler anında emülatör veya gerçek cihazda otomatik olarak yansır. Hızlı geliştirme ve anlık test imkanı sunar.

---

## ⚡️ Kurulum

### 1. Gereksinimler

Projeyi geliştirmek ve Android üzerinde çalıştırmak için aşağıdaki yazılımların sisteminizde kurulu olması gerekir:

-   🟢 [**Node.js**](https://nodejs.org/tr/download) (Önerilen: 22.x veya üzeri)
-   🟣 [**Visual Studio Code**](https://code.visualstudio.com/) (veya tercih ettiğiniz bir kod editörü)
-   📱 [**MEmu Android Emulator**](https://www.memuplay.com/): MEmu hafif ve performanslı çalışması sebebiyle tavsiye edilir (veya Android Studio Emulator)
-   🌀 [**Git**](https://git-scm.com/downloads): Repoyu klonlamak ve güncel tutabilmek için

### 2. Repoyu Klonlayın

```sh
git clone https://github.com/mburakkalkan/expo-starter-meb.git
cd expo-starter-meb
```

### 4. Bağımlılıkları Yükleyin

```sh
npm install
```

### 5. Emülatörü Başlatın

-   🤖 Android Studio Emulatör ve MacOS'ta iOS Simulator kullanıyorsanız otomatik başlayacaktır.
-   🟣 MEmu kullanıyorsanız manuel olarak kısayolundan başlatmanız gerekmektedir.
-   🔌 Eğer farklı bir emülatör veya gerçek cihaz kullanacaksanız, cihazda **USB debugging (USB hata ayıklama)** özelliğini etkinleştirin ve gerekiyorsa `adb connect <cihaz_ip_adresi>` komutunu kullanarak cihazı bilgisayarınıza bağlayın.
-   📄 Kullandığınız emülatörün veya cihazın dokümantasyonunu incelemeniz tavsiye edilir.
-

### 6. Emülatöre Geliştirme APK'sını Yükleyin

-   📦 [**Releases**](https://github.com/mburakkalkan/expo-starter-meb/releases) bölümünden geliştirme `.apk` dosyasını indirin. Bu APK, MEB ağında sorunsuz çalışacak şekilde özel olarak paketlenmiştir.
-   İndirdiğiniz `.apk` dosyasını emülatör penceresine sürükle-bırak yaparak yükleyin.

### 7. Projeyi Başlatın

```sh
npm run start
```

> Bu komutla Metro Bundler başlatılır ve terminalde bir QR kod görüntülenir. Klavyeden **a** tuşuna basarsanız uygulama otomatik olarak Android emülatörde başlayacaktır.
>
> Alternatif olarak, Metro Bundler ekranında çıkan QR kodunu [Expo Go](https://expo.dev/go) uygulaması ile telefonunuzdan okutarak projeyi gerçek cihazda (Android veya iOS) test edebilirsiniz. Ancak cihazınızın bilgisayarınızla aynı ağda olması gerekir. MEB hattında Expo Go ile sertifika ve bağlantı sorunları yaşanabileceğinden, doğrudan 5. adımda anlatılan APK kurulumunu kullanmanız tavsiye edilir.

---

## 🛠️ Kullanılan Teknolojiler

-   [Expo](https://expo.dev/) 🚀
-   [React Native](https://reactnative.dev/) 📱
-   [NativeWind (Tailwind CSS)](https://www.nativewind.dev/) 🎨
-   [React Native Paper](https://callstack.github.io/react-native-paper/) 🧩

---

## 📚 Ek Notlar

-   Proje, MEB ağına uygun olarak test edilmiştir. Sertifika ve ağ ayarları ile ilgili sorun yaşarsanız, lütfen `network-config.js` dosyasındaki yapılandırmayı inceleyin.
-   Tasarım ve tema özelleştirmeleri için `paper-theme.json` ve `tailwind.config.js` dosyalarını düzenleyebilirsiniz.
-   Tüm sayfalar otomatik olarak tema ve SafeArea ile sarmalanır, ekstra bir kapsayıcıya gerek yoktur.

---

## 🖥️ Öğrenci Bilgisayarlarına Dağıtım

Öğrenci bilgisayarlarına projeyi dağıtırken, her bilgisayarda tekrar tekrar bağımlılık kurulumu (`npm install`) ile uğraşmamak ve Deep Freeze gibi sistem koruma yazılımlarının olası etkilerinden kaçınmak için şu yöntemi öneririz:

1. Geliştirici bilgisayarınızda tüm bağımlılıkları yükledikten sonra (`npm install`),
2. Proje klasörünün tamamını (node_modules dahil) bir arşiv dosyasına (.zip/.rar) ekleyin veya doğrudan kopyalayın.
3. Bu arşivi/klasörü öğrenci bilgisayarlarına dağıtın.
4. Öğrenciler, klasörü açtıktan sonra doğrudan `npm run start` komutuyla projeyi başlatabilir.

> Bu yöntem, Deep Freeze gibi sistemlerde dahi bağımlılıkların eksikliği veya kurulum hatası yaşanmasını önler ve dağıtımı çok daha hızlı hale getirir.

---

💡 Her türlü katkı ve geri bildirime açıktır!
