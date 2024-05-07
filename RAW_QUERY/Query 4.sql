SELECT id, employee_id, EXTRACT(YEAR FROM age(date_of_birth)) AS age_years FROM public.employee_profile;

SELECT 
    string_agg(concat(count, ' ', relation_status), ', ') AS family_members_count
FROM (
    SELECT 
        employee_id,
        relation_status,
        COUNT(*) AS count
    FROM 
        employee_family
    GROUP BY 
        employee_id, relation_status
) AS counts
GROUP BY 
    employee_id;

SELECT e.id as employee_id, e.nik, e.name, e.is_active, ep."gender", EXTRACT(YEAR FROM age(ep.date_of_birth)) AS age, ed.name as school_name, ed.level, ef.family_data FROM public.employee e
left join public.employee_profile ep on ep.employee_id = e.id
left join public.education ed on ed.employee_id = e.id
left join (select employee_id, string_agg(concat(count, ' ', relation_status), ', ') AS family_data from (
select employee_id, relation_status, count(*) as count from employee_family group by employee_id, relation_status) as counts
        group by employee_id) as ef on ef.employee_id = e.id
where e.is_active = true and e.id = 1 order by e.id desc