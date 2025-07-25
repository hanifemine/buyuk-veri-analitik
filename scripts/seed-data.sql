-- Örnek veri ekleme

-- Veri kategorileri
INSERT INTO data_categories (name, description, color) VALUES
('Finansal', 'Mali ve bütçe verileri', '#0088FE'),
('Operasyonel', 'Günlük operasyon verileri', '#00C49F'),
('Müşteri', 'Vatandaş ve müşteri verileri', '#FFBB28'),
('Risk', 'Risk analizi ve güvenlik verileri', '#FF8042'),
('İstatistik', 'Genel istatistiksel veriler', '#8884D8');

-- Örnek kullanıcılar
INSERT INTO users (username, email, password_hash, role, department) VALUES
('admin', 'admin@kurum.gov.tr', '$2b$10$example_hash', 'administrator', 'IT Departmanı'),
('analyst1', 'analyst1@kurum.gov.tr', '$2b$10$example_hash', 'analyst', 'Veri Analiz'),
('viewer1', 'viewer1@kurum.gov.tr', '$2b$10$example_hash', 'viewer', 'Finans'),
('manager1', 'manager1@kurum.gov.tr', '$2b$10$example_hash', 'manager', 'Operasyon');

-- Örnek veri setleri
INSERT INTO datasets (name, description, file_type, file_size, record_count, created_by) VALUES
('Vatandaş Hizmetleri Verileri', 'Kamu hizmetlerine erişim verileri', 'CSV', 2576980377, 1234567, 1),
('Mali İstatistikler', 'Aylık mali raporlar ve bütçe verileri', 'JSON', 897581056, 456789, 1),
('Nüfus Kayıtları', 'Demografik analiz verileri', 'XML', 3435973837, 2345678, 2),
('Eğitim İstatistikleri', 'Eğitim kurumları performans verileri', 'CSV', 1181116006, 789012, 2),
('Sağlık Verileri', 'Halk sağlığı istatistikleri', 'JSON', 5046586573, 3456789, 3);

-- Veri seti kategorileri ilişkileri
INSERT INTO dataset_categories (dataset_id, category_id) VALUES
(1, 3), (1, 5),  -- Vatandaş Hizmetleri: Müşteri, İstatistik
(2, 1), (2, 5),  -- Mali İstatistikler: Finansal, İstatistik
(3, 5),          -- Nüfus Kayıtları: İstatistik
(4, 5),          -- Eğitim İstatistikleri: İstatistik
(5, 5);          -- Sağlık Verileri: İstatistik

-- Örnek sistem aktiviteleri
INSERT INTO system_activities (user_id, activity_type, description) VALUES
(1, 'data_upload', 'Vatandaş Hizmetleri Verileri güncellendi'),
(2, 'user_login', 'Sistem analisti giriş yaptı'),
(1, 'security_alert', 'Anormal erişim denemesi tespit edildi'),
(3, 'data_processing', 'Mali İstatistikler analizi tamamlandı'),
(1, 'system_error', 'Geçici bağlantı sorunu yaşandı');

-- Örnek işleme işleri
INSERT INTO processing_jobs (dataset_id, job_type, status, created_by) VALUES
(1, 'data_validation', 'completed', 1),
(2, 'statistical_analysis', 'running', 2),
(3, 'data_cleaning', 'pending', 1),
(4, 'report_generation', 'completed', 3),
(5, 'anomaly_detection', 'failed', 2);
