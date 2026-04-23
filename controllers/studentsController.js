const students = [
  { id: 1, name: "Ann", subject: "maths" },
  { id: 2, name: "Bob", subject: "IT" },
  { id: 3, name: "Cloe", subject: "PE" },
];

export const GetAllStudents = (req, res) => {
  res.status(200).json(students);
}

export const GetStudent = (req, res) => {
  const id = +req.params.id;
  const student = students.find((x) => x.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
}

export const AddStudent = (req, res) => {
  const { name, subject } = req.body;
  if (!name || !subject) {
    return res.status(400).json({ message: "Name and subject are required" });
  }
  const id = (students[students.length - 1]?.id || 0) + 1;
  const student = { id, name, subject };
  students.push(student);
  res.status(201).json(student);
}

export const ReplaceStudent = (req, res) => {
  const { name, subject } = req.body;
  if (!name || !subject) {
    return res.status(400).json({ message: "Name and subject are required" });
  }
  const id = +req.params.id;
  const student = students.find((x) => x.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  student.name = name;
  student.subject = subject;
  res.status(200).json(student);
}