# Expo Starter MEB ⚛️

## 🚀 Proje Tanıtımı

**Expo Starter MEB**, MEB'e bağlı okullarda sorunsuz çalışacak şekilde özel olarak hazırlanmış, modern ve ölçeklenebilir bir React Native başlangıç projesidir. Proje, güncel tasarım standartlarına uygun olup hızlı geliştirme ve kolay özelleştirme imkanı sunar.

📱 MTAL Bilişim Teknolojileri Alanı'nın **Mobil Uygulamalar** dersinde kullanıma uygundur. Web Tabanlı Uygulamalar dersiyle güçlü bir paralellik kurar. Özellikle React Native'in HTML ve CSS'e çok yakın sözdizimi sayesinde öğrenciler, mobil ve web konseptlerini karşılaştırmalı ve bütüncül bir şekilde öğrenebilir. Bir derste edindikleri bilgileri diğerine kolayca transfer edebilir ve böylece iki ders birbirini doğal olarak destekler hale gelir.

### ✨ Başlıca Özellikler

-   🌐 **Gerçek Cross-Platform Geliştirme**: React Native ile tek bir kod tabanından hem Android hem de iOS için (ve Expo ile web için de) uygulama geliştirebilirsiniz. Böylece platform bağımsız, geniş kitlelere ulaşan projeler üretebilirsiniz.
-   🚀 **Güncel Expo SDK**: Proje, en son sürüm Expo SDK ile uyumlu olarak geliştirilmiştir. Böylece en yeni özelliklerden ve performans iyileştirmelerinden faydalanabilirsiniz.
-   ⚡ **Live Reload (Canlı Yenileme)**: Kodda yaptığınız değişiklikler anında emülatör veya gerçek cihazda otomatik olarak yansır. Hızlı geliştirme ve anlık test imkanı sunar.
-   🛡️ **MEB Sertifikası Desteği**: Proje, MEB ağına bağlı cihazlarda güvenli bağlantı için gerekli olan MEB kök sertifikasını otomatik olarak içerir ve uygular. Böylece ağ kısıtlamalarından etkilenmeden uygulamanız çalışır.
-   🎨 **NativeWind ile Tailwind CSS Desteği**: NativeWind sayesinde, React Native projelerinde Tailwind CSS'in gücünü ve esnekliğini kullanabilirsiniz. Hızlı prototipleme ve tutarlı stil yönetimi sağlar.
-   🧩 **React Native Paper ile Modern UI**: Google'ın Material Design prensiplerine uygun, erişilebilir ve şık arayüzler için React Native Paper entegre edilmiştir.
-   🌈 **SafeArea ve Tema Yönetimi**: Tüm sayfalar otomatik olarak SafeArea ve tema sağlayıcıları ile sarmalanır. Karanlık/aydınlık tema desteği kolayca eklenebilir.

---

## ⚡️ Kurulum

### 1. Gereksinimler

Projeyi geliştirmek ve Android üzerinde çalıştırmak için aşağıdaki yazılımların sisteminizde kurulu olması gerekir:

-   🟣 [**Visual Studio Code**](https://code.visualstudio.com/) (veya tercih ettiğiniz bir kod editörü)
-   🟢 [**Node.js**](https://nodejs.org/tr/download) (Önerilen: 20.x veya üzeri)
-   🌀 [**Git**](https://git-scm.com/downloads)
-   🛠️ [**Android Studio**](https://developer.android.com/studio?hl=tr) (Android SDK ve AVD Manager ile birlikte)
-   ☕ **Java Development Kit (JDK)** (Android Studio ile birlikte gelir, gerekirse ayrıca [OpenJDK 11 veya 17](https://adoptium.net/) yükleyin)
-   📱 **Android Emulator**: Android Studio içinden AVD Manager ile kurabilir veya daha hafif bir alternatif olarak [MEmu](https://www.memuplay.com/) gibi bir emulator kullanabilirsiniz.

> **Not:** Android Studio'yu kurduktan sonra, "SDK Tools" sekmesinden en az bir "Android SDK Platform" ve "Android SDK Build-Tools" sürümünün yüklü olduğundan emin olun.

### 2. ANDROID_HOME Ortam Değişkenini Ayarlayın

Android SDK'nın kurulu olduğu dizini sisteminize tanıtmak için ANDROID_HOME ortam değişkenini ayarlamanız gerekir:

-   **Windows:**
    1. Denetim Masası > Sistem > Gelişmiş Sistem Ayarları > Ortam Değişkenleri yolunu izleyin.
    2. "Yeni" diyerek değişken adı olarak `ANDROID_HOME`, değer olarak ise genellikle `C:\Users\<kullanıcı_adı>\AppData\Local\Android\Sdk` yazın.
    3. `Path` değişkenine de `%ANDROID_HOME%\platform-tools` ekleyin.
-   **Mac/Linux:**
    1. Terminalde `nano ~/.bashrc` veya `nano ~/.zshrc` komutunu açın.
    2. Dosyanın sonuna aşağıdaki satırları ekleyin:
        ```sh
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/platform-tools
        ```
    3. Dosyayı kaydedip kapatın, ardından terminali yeniden başlatın veya `source ~/.bashrc` komutunu çalıştırın.

> Doğru ayarlandığından emin olmak için terminale `adb --version` yazıp çıktısını kontrol edebilirsiniz.

### 3. Depoyu Klonlayın

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

-   📦 [**Releases**](https://github.com/mburakkalkan/expo-starter-meb/releases) bölümünden, MEB sertifikası entegre edilmiş ve kullanıma hazır en güncel geliştirme `.apk` dosyasını indirin. Bu APK, MEB ağında sorunsuz çalışacak şekilde özel olarak paketlenmiştir.
-   İndirdiğiniz `.apk` dosyasını emülatör penceresine sürükle-bırak yaparak kolayca kurabilirsiniz.

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
