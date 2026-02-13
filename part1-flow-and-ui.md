# Betclic – QA Assessment

## Part 1: Flow Analysis & UI Review

---

# 1. Environment

| Device            | OS         | App Version    |
| ----------------- | ---------- | -------------- |
| iPhone 16 Pro     | iOS 26.3   | Betclic 9.10.1 |
| Samsung Galaxy S9 | Android 10 | Betclic 9.10.1 |

- **Scope:** Account registration / onboarding flow (app launch → referral code step)
- **Primary test device:** Both devices — happy path verified on iOS and Android
- **Test limitations:** National ID upload and address verification intentionally skipped as instructed

---

# 2. Flow Map (Happy Path)

```
App Launch
→ Cookie Consent
→ iOS Tracking Permission (system-level)
→ Start Registration
→ Title Selection
→ First Name
→ Last Name
→ Date of Birth
→ Place of Birth (Country + City)
→ ID Document (Skipped)
→ Username
→ Password
→ Email
→ Phone Number
→ Address (Autocomplete + Confirmation)
→ Address Verification (Skipped)
→ Final Compliance Step (Age + T&C + Marketing + Referral Code)
```

---

# 3. Main Happy Path Description

### Step 1 – App Launch

User opens the Betclic mobile application and lands on the splash screen.

### Step 2 – Cookie Consent

A cookie consent modal is displayed with three options:

- Configure
- Accept all
- Continue without accepting

The user selects an option and proceeds.

### Step 2bis – iOS Tracking Permission (iOS Only)

An iOS App Tracking Transparency (ATT) system popup appears.  
This is an OS-level permission request, not part of Betclic’s UI.

The user can:

- Allow tracking
- Ask the app not to track

Regardless of the selection, the registration flow continues.

### Step 3 – Start Registration

User initiates the account creation process.

### Step 4 – Title Selection

User selects a civil status (e.g., Monsieur).

### Step 5 – First Name

User enters first name (as per official ID).

### Step 6 – Last Name

User enters last name.

### Step 7 – Date of Birth

User enters a valid birth date (18+).

### Step 8 – Place of Birth

User selects:

- Country of birth
- City (autocomplete field)

### Step 9 – ID Document

User is prompted to upload an identity document.  
As instructed, this step is skipped using “Do it later”.

### Step 10 – Username

User chooses an available username.

### Step 11 – Password

User enters a password meeting validation rules:

- At least 1 lowercase letter
- At least 1 uppercase letter
- At least 1 number
- Between 8 and 20 characters

Real-time validation feedback is displayed.

### Step 12 – Email

User enters a valid email address.

### Step 13 – Phone Number

User enters a valid mobile phone number.

### Step 14 – Address

User enters a street address.  
Autocomplete suggestions appear.  
User selects a valid address.

### Step 15 – Address Verification

User is prompted to:

- Upload proof of address  
  OR
- Receive a postal verification code

This step is skipped as instructed.

### Step 16 – Final Compliance & Referral Screen

User must:

- Certify being over 18 years old
- Accept Terms & Conditions

Optional:

- Accept marketing communications
- Enter referral / promo code

The account creation button becomes enabled once mandatory toggles are activated.

---
