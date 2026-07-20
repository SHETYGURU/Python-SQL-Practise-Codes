-- https://www.sql-practice.com/

-- Show unique birth years from patients and order them by ascending.
select
  distinct year(birth_date) as birth_year
from patients
order by birth_date

-- Show unique first names from the patients table which only occurs once in the list.
-- For example, if two or more people are named 'John' in the first_name column then don't include their name in the output list. If only 1 person is named 'Leo' then include them in the output.
select first_name
from patients
group by first_name
having count(first_name) = 1

-- Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
select
  patient_id,
  first_name
from patients
where first_name like "s____%s"

-- Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
select
  patient_id,
  first_name
from patients
where first_name like "s____%s"

-- Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.
-- Primary diagnosis is stored in the admissions table.
SELECT
  patients.patient_id,
  first_name,
  last_name
FROM patients
  JOIN admissions ON admissions.patient_id = patients.patient_id
WHERE diagnosis = 'Dementia';

-- Display every patient's first_name.Order the list by the length of each name and then by alphabetically.
select first_name
from patients
order by
  len(first_name),
  first_name

-- Show the total amount of male patients and the total amount of female patients in the patients table.
-- Display the two results in the same row.
select 
(select count(*)  from patients where gender='M')male_count,
(select count(*)  from patients where gender='F')female_count

-- Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.
select
  first_name,
  last_name,
  allergies
from patients
where
  allergies in( 'Penicillin','Morphine')
order by
  allergies,
  first_name,
  last_name

-- Show the city and the total number of patients in the city.Order from most to least patients and then by city name ascending.
select
  city,
  count(*) num_patients
from patients
group by city
order by num_patients desc


-- Show first name, last name and role of every person that is either patient or doctor.The roles are either "Patient" or "Doctor"
SELECT first_name, last_name, 'Patient' as role FROM patients
    union all
select first_name, last_name, 'Doctor' from doctors;

-- Show all allergies ordered by popularity. Remove NULL values from query.
select
  allergies,
  count(*)
from patients
where allergies is not null
group by allergies
order by count(*) desc

-- Show all patient's first_name, last_name, and birth_date who were born in the 1970s decade. Sort the list starting from the earliest birth_date.
select
  first_name,
  last_name,
  birth_date
from patients
where
  year(birth_date) between 1970 and 1979
order by birth_date

-- We want to display each patient's full name in a single column. Their last_name in all upper letters must appear first, then first_name in all lower case letters. Separate the last_name and first_name with a comma. Order the list by the first_name in decending order EX: SMITH,jane
select
  concat(upper (last_name), ',', lower (first_name))
from patients
order by first_name desc

