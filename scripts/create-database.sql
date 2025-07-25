-- Büyük Veri Analitik Sistemi - Veritabanı Şeması

-- Kullanıcılar tablosu
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    department VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Veri setleri tablosu
CREATE TABLE IF NOT EXISTS datasets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    file_path VARCHAR(500),
    file_type VARCHAR(10),
    file_size BIGINT,
    record_count INTEGER,
    status VARCHAR(20) DEFAULT 'active',
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_accessed TIMESTAMP
);

-- Veri kategorileri tablosu
CREATE TABLE IF NOT EXISTS data_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    color VARCHAR(7) DEFAULT '#3B82F6'
);

-- Veri seti kategorileri ilişki tablosu
CREATE TABLE IF NOT EXISTS dataset_categories (
    dataset_id INTEGER REFERENCES datasets(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES data_categories(id) ON DELETE CASCADE,
    PRIMARY KEY (dataset_id, category_id)
);

-- Sistem aktiviteleri tablosu
CREATE TABLE IF NOT EXISTS system_activities (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    activity_type VARCHAR(50) NOT NULL,
    description TEXT,
    metadata JSONB,
    ip_address INET,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Veri işleme işleri tablosu
CREATE TABLE IF NOT EXISTS processing_jobs (
    id SERIAL PRIMARY KEY,
    dataset_id INTEGER REFERENCES datasets(id),
    job_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    error_message TEXT,
    result_data JSONB,
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- API anahtarları tablosu
CREATE TABLE IF NOT EXISTS api_keys (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    key_name VARCHAR(100) NOT NULL,
    api_key VARCHAR(255) UNIQUE NOT NULL,
    permissions JSONB,
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_used TIMESTAMP
);

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_datasets_status ON datasets(status);
CREATE INDEX IF NOT EXISTS idx_datasets_created_by ON datasets(created_by);
CREATE INDEX IF NOT EXISTS idx_activities_user_id ON system_activities(user_id);
CREATE INDEX IF NOT EXISTS idx_activities_created_at ON system_activities(created_at);
CREATE INDEX IF NOT EXISTS idx_processing_jobs_status ON processing_jobs(status);
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);
