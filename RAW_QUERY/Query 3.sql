INSERT INTO public.employee (nik, "name", is_active, start_date, end_date) VALUES('11012', 'Budi', true, '2022-12-12', '2029-12-12');

INSERT INTO public.employee (nik, "name", is_active, start_date, end_date) VALUES('11013', 'Jarot', true, '2021-09-01', '2028-09-01');

INSERT INTO public.education (employee_id, "name", "level", description, created_by, updated_by, created_at, updated_at) VALUES(1, 'SMKN 7 JAKARTA', 'sma', 'Sekolah Menengah Atas', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.education (employee_id, "name", "level", description, created_by, updated_by, created_at, updated_at) VALUES(2, 'Universitas Negeri Jakarta', 'strata 1', 'Sarjana', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.employee_profile (employee_id, place_of_birth, date_of_birth, "gender", is_married, prof_pict, created_by, updated_by, created_at, updated_at) VALUES(1, 'Jakarta', '1997-05-02', 'laki-laki', true, '', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.employee_profile (employee_id, place_of_birth, date_of_birth, "gender", is_married, prof_pict, created_by, updated_by, created_at, updated_at) VALUES(2, 'Sukabumi', '1996-05-02', 'laki-laki', false, '', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.employee_family (employee_id, "name", identifier, job, place_of_birth, date_of_birth, "religion", is_life, is_divorced, relation_status, created_by, updated_by, created_at, updated_at) VALUES(1, 'Marni', '32100594109960002', 'Ibu Rumah Tangga', 'Denpasar', '1995-10-17', 'islam', true, false, 'istri', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.employee_family (employee_id, "name", identifier, job, place_of_birth, date_of_birth, "religion", is_life, is_divorced, relation_status, created_by, updated_by, created_at, updated_at) VALUES(1, 'Clara', '32100594109020004', 'Pelajar', 'Bangkalan', '2008-10-17', 'islam', true, false, 'anak', 'admin', 'admin', '2022-12-12', '2022-12-12');

INSERT INTO public.employee_family (employee_id, "name", identifier, job, place_of_birth, date_of_birth, "religion", is_life, is_divorced, relation_status, created_by, updated_by, created_at, updated_at) VALUES(1, 'Stephanie', '32100594109020005', 'Pelajar', 'Bangkalan', '2008-10-17', 'islam', true, false, 'anak', 'admin', 'admin', '2022-12-12', '2022-12-12');

