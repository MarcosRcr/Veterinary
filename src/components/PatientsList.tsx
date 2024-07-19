import { usePatientsStore } from "../store";
import { PatientDetail } from "./types/PatientDetail";

export const PatientsList = () => {
  const patients = usePatientsStore((state) => state.patients);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">
            Listado de <span className="text-indigo-500">Pacientes</span>
          </h2>
          <p className="text-indigo-500 text-lg text-center mt-5">
            Administra los Pacientes y citas
          </p>
          {patients.map((patient) => (
            <PatientDetail key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-4xl text-center">No hay pacientes</h2>
          <p className="text-lg text-center font-semibold">
            {" "}
            Agrega un paciente para comenzar
          </p>
        </>
      )}
    </div>
  );
};
