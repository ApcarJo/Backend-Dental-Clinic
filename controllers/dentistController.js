
const bcrypt = require('bcrypt');
const Dentist = require('../models/dentist');


class Professional {

    constructor(){

    }

    async findAllDentists() {
        return Dentist.find();
    }

    async createDentist(dentist){
        dentist.password = await bcrypt.hash( dentist.password, 10 );
        return Dentist.create(dentist);
    }

    async findDentistInfo() {
        return Dentist.find(
             {isActive : true},
             {city: '$city',
             name: '$name',
             speciality: '$speciality'}
         );
     }

    async updateDentist(bodyData){
        return Dentist.findByIdAndUpdate(
            {_id: bodyData.id},
            {phone: bodyData.phone,
            city: bodyData.city,},
            {new:true,omitUndefined:true}
        )
    }

    async findByEmail(email){
        return Dentist.findOne(
            {email: email}
        )
    }

    async findById(id){
        return Dentist.findOne(
            {_id: id}
        )
    }

    async addSpeciality(bodyData){
        return Dentist.findByIdAndUpdate(
            {_id: bodyData.id},
            {$push: {speciality: bodyData.speciality}}
        )
    }

    async deleteDentist(bodyData){
        return Dentist.findByIdAndDelete(
            {_id: bodyData.id},
        )
    }

};

let dentistController = new Professional();
module.exports = dentistController;