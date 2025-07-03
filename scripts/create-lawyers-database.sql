-- Create LSK Pro-Bono Lawyers Database
-- This script creates and populates the lawyers database with mock data

CREATE TABLE IF NOT EXISTS lawyers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    specialization TEXT NOT NULL,
    experience INTEGER NOT NULL,
    location TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    rating REAL NOT NULL DEFAULT 4.0,
    cases_handled INTEGER NOT NULL DEFAULT 0,
    languages TEXT NOT NULL, -- JSON array as text
    availability TEXT NOT NULL DEFAULT 'Available',
    expertise TEXT NOT NULL, -- JSON array as text
    max_cases INTEGER NOT NULL DEFAULT 20,
    current_cases INTEGER NOT NULL DEFAULT 0,
    lsk_registration TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock lawyer data
INSERT INTO lawyers (name, specialization, experience, location, phone, email, rating, cases_handled, languages, availability, expertise, max_cases, current_cases, lsk_registration) VALUES
('Advocate Sarah Wanjiku Mwangi', 'Constitutional Law & Human Rights', 12, 'Nairobi', '+254 722 123 456', 's.mwangi@lsk.or.ke', 4.9, 150, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["protest_law", "human_rights", "constitutional_law"]', 20, 8, 'LSK/001/2012'),

('Advocate John Kiprotich Koech', 'Criminal Defense & Police Misconduct', 8, 'Nairobi', '+254 733 987 654', 'j.koech@advocates.co.ke', 4.7, 89, '["English", "Kiswahili", "Kalenjin"]', 'Available', '["criminal_defense", "police_misconduct", "detention_rights"]', 15, 5, 'LSK/002/2016'),

('Advocate Grace Wanjiku Ndungu', 'Human Rights & Civil Liberties', 15, 'Mombasa', '+254 711 456 789', 'g.ndungu@humanrights.org', 5.0, 200, '["English", "Kiswahili"]', 'Available', '["human_rights", "civil_liberties", "freedom_assembly"]', 25, 12, 'LSK/003/2009'),

('Advocate David Ochieng Otieno', 'Public Interest Law', 10, 'Kisumu', '+254 720 654 321', 'd.otieno@publiclaw.co.ke', 4.8, 120, '["English", "Kiswahili", "Luo"]', 'Available', '["public_interest", "constitutional_challenges", "protest_law"]', 18, 7, 'LSK/004/2014'),

('Advocate Mary Njeri Kamau', 'Constitutional Law & Women''s Rights', 9, 'Nakuru', '+254 712 345 678', 'm.kamau@lsk.or.ke', 4.6, 95, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["constitutional_law", "womens_rights", "discrimination"]', 16, 6, 'LSK/005/2015'),

('Advocate Peter Mwangi Githuku', 'Criminal Defense & Bail Applications', 14, 'Eldoret', '+254 734 567 890', 'p.githuku@criminallaw.co.ke', 4.9, 180, '["English", "Kiswahili", "Kalenjin", "Kikuyu"]', 'Available', '["criminal_defense", "bail_applications", "court_representation"]', 22, 9, 'LSK/006/2010'),

('Advocate Faith Wanjiru Kariuki', 'Human Rights & Legal Aid', 7, 'Thika', '+254 723 456 789', 'f.kariuki@legalaid.org', 4.5, 75, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["human_rights", "legal_aid", "community_law"]', 14, 4, 'LSK/007/2017'),

('Advocate James Omondi Owino', 'Constitutional Petitions & Judicial Review', 11, 'Kisumu', '+254 715 678 901', 'j.owino@constitutional.co.ke', 4.8, 130, '["English", "Kiswahili", "Luo"]', 'Available', '["constitutional_petitions", "judicial_review", "administrative_law"]', 20, 8, 'LSK/008/2013'),

('Advocate Catherine Wambui Njoroge', 'Family Law & Human Rights', 6, 'Nairobi', '+254 724 789 012', 'c.njoroge@familylaw.co.ke', 4.4, 65, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["family_law", "human_rights", "domestic_violence"]', 12, 3, 'LSK/009/2018'),

('Advocate Michael Kipchoge Ruto', 'Land Law & Constitutional Rights', 13, 'Eldoret', '+254 735 890 123', 'm.ruto@landlaw.co.ke', 4.7, 140, '["English", "Kiswahili", "Kalenjin"]', 'Available', '["land_law", "constitutional_rights", "property_disputes"]', 19, 7, 'LSK/010/2011'),

('Advocate Rose Akinyi Ouma', 'Criminal Law & Women''s Rights', 8, 'Kisumu', '+254 716 901 234', 'r.ouma@criminaldefense.co.ke', 4.6, 85, '["English", "Kiswahili", "Luo"]', 'Available', '["criminal_law", "womens_rights", "sexual_offenses"]', 15, 5, 'LSK/011/2016'),

('Advocate Samuel Mutua Kioko', 'Constitutional Law & Electoral Disputes', 16, 'Machakos', '+254 725 012 345', 's.kioko@electoral.co.ke', 4.9, 190, '["English", "Kiswahili", "Kamba"]', 'Available', '["constitutional_law", "electoral_disputes", "administrative_law"]', 24, 11, 'LSK/012/2008'),

('Advocate Esther Wanjiku Gitau', 'Human Rights & Child Protection', 5, 'Nairobi', '+254 736 123 456', 'e.gitau@childprotection.org', 4.3, 45, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["human_rights", "child_protection", "family_law"]', 10, 2, 'LSK/013/2019'),

('Advocate Daniel Kiprotich Cheruiyot', 'Criminal Defense & Police Brutality', 9, 'Eldoret', '+254 717 234 567', 'd.cheruiyot@policewatch.co.ke', 4.8, 110, '["English", "Kiswahili", "Kalenjin"]', 'Available', '["criminal_defense", "police_brutality", "torture_cases"]', 17, 6, 'LSK/014/2015'),

('Advocate Mercy Wanjiru Maina', 'Public Interest & Environmental Law', 7, 'Nyeri', '+254 726 345 678', 'm.maina@environmental.co.ke', 4.5, 70, '["English", "Kiswahili", "Kikuyu"]', 'Available', '["public_interest", "environmental_law", "community_rights"]', 13, 4, 'LSK/015/2017');

-- Create cases table to track assignments
CREATE TABLE IF NOT EXISTS cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    client_id_number TEXT NOT NULL,
    client_phone TEXT NOT NULL,
    client_location TEXT NOT NULL,
    next_of_kin_name TEXT NOT NULL,
    next_of_kin_phone TEXT NOT NULL,
    case_description TEXT NOT NULL,
    urgency_level TEXT NOT NULL DEFAULT 'medium',
    assigned_lawyer_id INTEGER,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expected_contact_time DATETIME,
    FOREIGN KEY (assigned_lawyer_id) REFERENCES lawyers (id)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_lawyers_location ON lawyers(location);
CREATE INDEX IF NOT EXISTS idx_lawyers_availability ON lawyers(availability);
CREATE INDEX IF NOT EXISTS idx_cases_status ON cases(status);
CREATE INDEX IF NOT EXISTS idx_cases_urgency ON cases(urgency_level);
