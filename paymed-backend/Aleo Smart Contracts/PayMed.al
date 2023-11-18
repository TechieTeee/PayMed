use snarkvm::prelude::*;

struct PayMed {
    patients: Vec<String>,
    doctors: Vec<String>,
    files: Vec<String>,
    approvals: Vec<(String, String)>,
}

impl PayMed {
    fn new() -> Self {
        PayMed {
            patients: Vec::new(),
            doctors: Vec::new(),
            files: Vec::new(),
            approvals: Vec::new(),
        }
    }

    fn add_patient(&mut self, patient_id: String) {
        self.patients.push(patient_id);
    }

    fn add_doctor(&mut self, doctor_id: String) {
        self.doctors.push(doctor_id);
    }

    fn add_file(&mut self, file_hash: String) {
        self.files.push(file_hash);
    }

    fn approve_access(&mut self, patient_id: String, doctor_id: String) {
        self.approvals.push((patient_id, doctor_id));
    }

    fn is_approved(&self, patient_id: String, doctor_id: String) -> bool {
        self.approvals.iter().any(|approval| approval.0 == patient_id && approval.1 == doctor_id)
    }

    fn can_access_file(&self, patient_id: String, doctor_id: String, file_hash: String) -> bool {
        self.is_approved(patient_id, doctor_id) && self.files.contains(&file_hash)
    }
}
