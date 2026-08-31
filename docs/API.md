# API Documentation

## POST /api/contact
Creates a contact message.

Required:
- name
- phone
- message

Optional:
- email

## POST /api/join
Creates a membership application.

Required:
- name
- phone
- goal

Optional:
- email

## POST /api/trial
Creates a free-trial request.

Required:
- name
- phone
- date
- time
- goal

Production implementation must persist records and add authentication/rate limiting where appropriate.
