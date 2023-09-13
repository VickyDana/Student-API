const Student = require('../models/student');


exports.createStudent = async(req, res) =>{
    if(!req.body){
        res.status(400).send("Cannot add without info")
        return;
    }
    
    const student = new Student(req.body); 
    
    try{
        student.save()
        .then(student =>{

            console.log(student)
            res.send(student)
        })
        
    }catch (err){
         res.status(500).send('Could not create a new student')
         console.log(`Some err occured : ${err.message}`)
    }
};

exports.getStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}
exports.deleteStudents = async(req, res) => {
    try {

        const id = req.params.id;
        const students = await Student.findByIdAndDelete(id);
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

