CREATE TABLE public.employee (
	id bigserial NOT NULL,
	nik varchar NULL,
	name varchar NULL,
	is_active bool NULL,
	start_date date NULL,
	end_date date NULL,
	created_by varchar(255) NULL,
	updated_by varchar(255) NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,
	CONSTRAINT employee_pk PRIMARY KEY (id)
);

CREATE TYPE gender AS ENUM ('laki-laki', 'perempuan');
CREATE TABLE public.employee_profile (
	id bigserial NOT NULL,
	employee_id int8 NOT NULL,
	place_of_birth varchar(50) NULL,
	date_of_birth date NULL,
	gender public.gender NULL,
	is_married bool NULL,
	prof_pict varchar(255) NULL,
	created_by varchar(255) NULL,
	updated_by varchar(255) NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,
	CONSTRAINT employee_profile_pk PRIMARY KEY (id),
	CONSTRAINT employee_profile_employee_fk FOREIGN KEY (employee_id) REFERENCES public.employee(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TYPE religion AS ENUM ('islam', 'katolik', 'budha', 'protestan', 'konghucu');
CREATE TYPE status AS ENUM ('suami', 'istri', 'anak', 'anak sambung');
CREATE TABLE public.employee_family (
	id bigserial NOT NULL,
	employee_id int8 NOT NULL,
	"name" varchar(255) NULL,
	identifier varchar(255) NULL,
	job varchar(255) NULL,
	place_of_birth varchar(50) NULL,
	date_of_birth date NULL,
	religion public.religion NULL,
	is_life bool NULL,
	is_divorced bool NULL,
	relation_status public.status NULL,
	created_by varchar(255) NULL,
	updated_by varchar(255) NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,
	CONSTRAINT employee_family_pk PRIMARY KEY (id),
	CONSTRAINT employee_family_employee_fk FOREIGN KEY (employee_id) REFERENCES public.employee(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TYPE level AS ENUM ('tk', 'sd', 'smp', 'sma', 'strata 1', 'strata 2', 'doktor', 'professor');
CREATE TABLE public.education (
	id bigserial NOT NULL,
	employee_id int8 NOT NULL,
	"name" varchar(255) NULL,
	"level" public."level" NULL,
	description varchar(255) NULL,
	created_by varchar(255) NULL,
	updated_by varchar(255) NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,
	CONSTRAINT education_pk PRIMARY KEY (id),
	CONSTRAINT education_employee_fk FOREIGN KEY (employee_id) REFERENCES public.employee(id) ON DELETE CASCADE ON UPDATE CASCADE
);
