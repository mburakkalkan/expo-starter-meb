# Expo Starter MEB ⚛️

## 🚀 Proje Tanıtımı

**Expo Starter MEB**, MEB internet altyapısına bağlı okullarda sorunsuz çalışacak şekilde özel olarak hazırlanmış, modern ve ölçeklenebilir bir React Native başlangıç projesidir. Proje, güncel tasarım standartlarına uygun olup yüksek donanım gereksinimi olmadan çoklu platformda hızlı geliştirme ve kolay özelleştirme imkanı sunar.

📱 MTAL Bilişim Teknolojileri Alanı'nın **Mobil Uygulamalar** dersinde kullanıma uygundur. Web Tabanlı Uygulamalar dersiyle güçlü bir paralellik kurar. Özellikle React Native'in HTML ve CSS'e çok yakın sözdizimi sayesinde öğrenciler, mobil ve web konseptlerini karşılaştırmalı ve bütüncül bir şekilde öğrenebilir. Bir derste edindikleri bilgileri diğerine kolayca transfer edebilir ve böylece iki ders birbirini doğal olarak destekler hale gelir.

### ✨ Başlıca Özellikler

- 🌐 **Gerçek Cross-Platform Geliştirme**: React Native ile tek bir kod tabanından hem Android hem de iOS için (ve Expo ile web için de) uygulama geliştirebilirsiniz. Böylece platform bağımsız, geniş kitlelere ulaşan projeler üretebilirsiniz.
- 🚀 **Güncel Expo SDK**: Proje, en son sürüm Expo SDK ile uyumlu olarak geliştirilmiştir. Böylece en yeni özelliklerden ve performans iyileştirmelerinden faydalanabilirsiniz.
- 🛡️ **MEB Sertifikası Desteği**: Proje, MEB ağına bağlı cihazlarda güvenli bağlantı için gerekli olan MEB kök sertifikasını otomatik olarak içerir ve uygular. Böylece ağ kısıtlamalarından etkilenmeden uygulamanız çalışır.
- 🎨 **NativeWind ile Tailwind CSS Desteği**: NativeWind sayesinde, React Native projelerinde Tailwind CSS'in gücünü ve esnekliğini kullanabilirsiniz. Hızlı prototipleme ve tutarlı stil yönetimi sağlar.
- 🧩 **React Native Paper ile Modern UI**: Google'ın Material Design prensiplerine uygun, erişilebilir ve şık arayüzler için React Native Paper entegre edilmiştir.
- ⚡ **Live Reload (Canlı Yenileme)**: Kodda yaptığınız değişiklikler anında emülatör veya gerçek cihazda otomatik olarak yansır. Hızlı geliştirme ve anlık test imkanı sunar.

---

## 🛠️ Kullanılan Teknolojiler

- [Expo](https://expo.dev/) 🚀
- [React Native](https://reactnative.dev/) 📱
- [NativeWind (Tailwind CSS)](https://www.nativewind.dev/) 🎨
- [React Native Paper](https://callstack.github.io/react-native-paper/) 🧩

---

## ⚡️ Kurulum

### 1. Gereksinimler

Projeyi geliştirmek ve Android üzerinde çalıştırmak için aşağıdaki yazılımların sisteminizde kurulu olması gerekir:

- 🟢 [**Node.js**](https://nodejs.org/tr/download) (Önerilen: 22.x veya üzeri)
- 🟠 [**Android Studio**](https://developer.android.com/studio?hl=tr) (SDK kullanımı için)
- 🟣 [**Visual Studio Code**](https://code.visualstudio.com) (veya tercih ettiğiniz bir kod editörü)
- 📱 [**MEmu Android Emulator**](https://www.memuplay.com): MEmu hafif ve performanslı çalışması sebebiyle tavsiye edilir (veya Android Studio Emulator)
- 🌀 (opsiyonel) [**Git**](https://git-scm.com/downloads): Repoyu klonlamak ve güncel tutabilmek için

### 2. Repoyu Klonlayın veya zip olarak [indirin](https://github.com/mburakkalkan/expo-starter-meb/archive/refs/heads/main.zip)

```sh
git clone https://github.com/mburakkalkan/expo-starter-meb.git
cd expo-starter-meb
```

### 3. Proje dizinini komut satırı ile açın ve bağımlılıkları yükleyin

```sh
npm install
```

### 4. Emülatörü Başlatın

- 🟣 MEmu emülatörü kısayolundan başlatabilirsiniz.
- 🤖 Android Studio Emulatör ve MacOS'ta iOS Simulator kullanıyorsanız 6. adımdaki aşamalarda kendisi otomatik başlayacaktır.
- 🔌 Eğer farklı bir emülatör veya gerçek cihaz kullanacaksanız, **USB debugging (USB hata ayıklama)** özelliğini etkinleştirin.

### 5. Emülatöre Geliştirme APK'sını Yükleyin

- 📦 [**Releases**](https://github.com/mburakkalkan/expo-starter-meb/releases) bölümünden geliştirme `.apk` dosyasını indirin.
- İndirdiğiniz `.apk` dosyasını emülatör penceresine sürükle-bırak yaparak yükleyin.

### 6. Projeyi Başlatın

```sh
npm run start
```

- Bu komutla Metro Bundler başlatılır ve terminalde bir QR kod görüntülenir. Klavyeden 🅰️ tuşuna basarsanız uygulama otomatik olarak Android emülatörde başlayacaktır.
- Geliştirme esnasında kodlarınız Live Reload ile canlı olarak bu uygulama içerisinde çalıştırılacaktır.

https://github.com/user-attachments/assets/57ead161-5587-4e07-ac0a-6080f4fc9fd1

💡 Eğer proje başlangıcında Expo'nun versiyon kontrolü gibi çeşitli denetimler yapmasına gerek duymuyorsanız çevrimdışı modda da başlatabilirsiniz:

```sh
npm run offline
```

---

## 📚 Ek Notlar

- Proje, MEB ağına uygun olarak test edilmiştir. Sertifika ve ağ ayarları ile ilgili sorun yaşarsanız, lütfen `network-config.js` dosyasındaki yapılandırmayı inceleyin.
- Tasarım ve tema özelleştirmeleri için `paper-theme.json` ve `tailwind.config.js` dosyalarını düzenleyebilirsiniz.
- Tüm sayfalar otomatik olarak tema ve SafeAreaView ile sarmalanır, ekstra bir kapsayıcıya gerek yoktur.

---

## 🖥️ Öğrenci Bilgisayarlarına Dağıtım

Öğrenci bilgisayarlarına projeyi dağıtırken, her bilgisayarda tekrar tekrar bağımlılık kurulumu (`npm install`) ile uğraşmamak ve Deep Freeze gibi sistem koruma yazılımlarının olası etkilerinden kaçınmak için şu yöntem daha sorunsuz olacaktır:

1. Öncelikle ilk adımda yer alan gerekli uygulamaları öğrenci bilgisayarlarına da kurun.
2. Öğretmen bilgisayarınızda projeyi indirin ve tüm bağımlılıkları `npm install` komutu ile yükleyin.
3. Bağımlılıkları yüklenmiş proje klasörünün tamamını (node_modules dahil) bir zip/rar dosyasına sıkıştırın.
4. Sıkıştırılmış paketi öğrenci bilgisayarlarına dağıtın ve istediğiniz bir yere zip/rar'dan çıkarın.
5. Böylece öğrenciler projeyi `npm run start` komutuyla doğrudan başlatabilirler.

> Bu yöntem, Deep Freeze gibi sistemlerde dahi bağımlılıkların eksikliği veya kurulum hatası yaşanmasını önler ve dağıtımı çok daha hızlı hale getirir.

---

## 📦 Uygulamanın Android APK veya iOS Çıktısını Alma

### 1. Lokal Build (Sadece macOS veya Linux)

Expo projesinde doğrudan kendi bilgisayarınızda APK veya iOS dosyası oluşturmak için aşağıdaki komutlar kullanılabilir. Ancak **Windows işletim sisteminde lokal build desteklenmemektedir**. Lokal build işlemleri için bir **macOS** veya **Linux** bilgisayara ihtiyacınız vardır.

Development ortamı için örnek komutlar (macOS veya Linux):

```sh
npm run dev-local-build-all
npm run dev-local-build-android
npm run dev-local-build-ios
```

Production ortamı için örnek komutlar (macOS veya Linux):

```sh
npm run prod-local-build-all
npm run prod-local-build-android
npm run prod-local-build-ios
```

> ⚠️ iOS için lokal build almak yalnızca macOS üzerinde ve Apple Developer hesabı gereksinimleriyle mümkündür.

### 2. EAS (Expo Application Services) Build ile Bulut Üzerinden Build (Tüm Platformlar)

Herhangi bir işletim sisteminde (Windows, macOS, Linux) Expo'nun EAS Build servisi ile bulut üzerinden APK veya iOS çıktısı alabilirsiniz. Bunun için Expo hesabınız olmalı ve aşağıdaki komutları kullanmalısınız:

Development ortamı için örnek komutlar:

```sh
npm run dev-eas-build-all
npm run dev-eas-build-android
npm run dev-eas-build-ios
```

Production ortamı için örnek komutlar:

```sh
npm run prod-eas-build-all
npm run prod-eas-build-android
npm run prod-eas-build-ios
```

Komutları çalıştırdıktan sonra, Expo projenizi buluta yükler ve derleme işlemi [EAS](https://expo.dev/eas) sunucularında gerçekleşir. Build tamamlandığında size bir indirme bağlantısı verilir.

> **Önemli:** EAS Build kullanmadan önce, projenin kök dizinindeki `app.json` dosyasında bulunan `expo.package` (Android için) ve `expo.projectId` alanlarını kendi Expo hesabınızda oluşturduğunuz değerlerle güncellemeniz gerekir. Aksi halde build işlemi başarısız olur. Gerekli değerleri [Expo Dashboard](https://expo.dev/) üzerinden kendi projenizi oluşturarak edinebilirsiniz.

> **Not:** EAS Build servisi, her Expo hesabı için aylık belirli bir sayıda ücretsiz bulut derleme (build) hakkı sunar. Bu ücretsiz kota dolduğunda, ek build işlemleri için ücretli bir EAS aboneliği gereklidir. Eğer projede sık sık APK veya iOS çıktısı almanız gerekiyorsa, Expo'nun [fiyatlandırma sayfasını](https://expo.dev/pricing) inceleyerek uygun bir abonelik planı seçebilirsiniz.

> EAS Build ile iOS çıktısı almak için Apple Developer hesabınızın olması gerekir.

**Daha fazla bilgi için:** [Expo EAS Build Dokümantasyonu](https://docs.expo.dev/build/introduction/)

---

💡 Her türlü katkı için [Pull request](https://github.com/mburakkalkan/expo-starter-meb/pulls) açabilir, yaşadığınız sorunlar ve geri bildirimler içinse [Issues](https://github.com/mburakkalkan/expo-starter-meb/issues) alanını kullanabilirsiniz ❤️
