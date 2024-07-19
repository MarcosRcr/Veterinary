import { FaPencil } from "react-icons/fa6";
import { Patient } from ".";
import { DetailItem } from "../DetailItem";
import { FaTrash } from "react-icons/fa";
import { usePatientsStore } from "../../store";
import { toast } from "react-toastify";

type PatientDetailProps = {
  patient: Patient;
};
export const PatientDetail = ({ patient }: PatientDetailProps) => {
  const deletePatient = usePatientsStore((state) => state.deletePatient);
  const getPatientById = usePatientsStore((state) => state.getPatientById);
  const handleClick = () => {
    deletePatient(patient.id);
    toast.success("El paciente ha sido eliminado correctamente", {
      type: "error",
      theme: "colored",
    });
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <DetailItem label="Nombre" data={patient.name} />
      <DetailItem label="Propietario" data={patient.caretaker} />
      <DetailItem label="Email" data={patient.email} />
      <DetailItem label="Fecha de cita" data={patient.date.toString()} />
      <DetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex justify-between gap-3 mt-10 text-white text-lg">
        <button
          className="bg-orange-400 rounded-full p-4"
          type="button"
          onClick={() => getPatientById(patient.id)}
        >
          <FaPencil />
        </button>
        <button
          className="bg-red-400 rounded-full p-4"
          type="button"
          onClick={handleClick}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
