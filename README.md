# Büyük Veri Analitik Sistemi

Bu proje, kamu kurumları için geliştirilmiş açık kaynaklı bir veri analitik platformudur. Amacı, departmanlar arası veri paylaşımını ve işbirliğini kolaylaştırarak, veriye dayalı karar alma süreçlerini güçlendirmektir.

## Özellikler

- **Dashboard:** Projeye genel bir bakış sunan, metrikleri ve analitikleri içeren bir gösterge paneli.
- **Veri Yönetimi:** Veri setlerini yükleme, görüntüleme ve yönetme.
- **Güvenlik:** İki aşamalı doğrulama ve şifre yönetimi gibi özelliklerle hesap güvenliği.
- **Projeler:** Proje oluşturma ve yönetme.
- **Sistem Analizi:** Sistem sağlığı ve performans metriklerini izleme.
- **Kullanıcı Profilleri:** Kullanıcı bilgilerini ve son aktiviteleri görüntüleme.
- **Ayarlar:** Genel proje, veri ve güvenlik ayarlarını yönetme.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/hanifemine/buyuk-veri-analitik.git
    cd buyuk-veri-analitik
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

    Uygulama varsayılan olarak `http://localhost:3004` adresinde çalışacaktır.

## Teknolojiler

- [Next.js](https://nextjs.org/) - React Framework
- [React](https://reactjs.org/) - Kullanıcı Arayüzü Kütüphanesi
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Programlama Dili
- [shadcn/ui](https://ui.shadcn.com/) - Bileşen Kütüphanesi
