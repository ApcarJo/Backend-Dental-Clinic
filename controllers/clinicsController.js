const Clinic = require('../models/clinic.js');

class Hospital {

    constructor(){

    }

    async findAllClinics() {
        return Clinic.find();
    }

    async createClinic(clinic){
        return Clinic.create(clinic);
    }

    async updateClinic(bodyData){
        return Clinic.findByIdAndUpdate(
            {_id: bodyData.id},
            {phone: bodyData.phone,
            email: bodyData.email,
            adress: bodyData.adress,    
            city: bodyData.city,
            postalCode : bodyData.postalCode,
            isOpen : bodyData.isOpen },
            {new:true,omitUndefined:true}
        )
    }

    async deleteClinic(bodyData){
        return Clinic.findByIdAndDelete(
            {_id: bodyData.id},
        )
    }
}

let clinicsController = new Hospital();
module.exports = clinicsController;