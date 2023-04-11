const { useState } = require("react");
const { useAuth } = require("./useAuth");

export const useHealth = (tabActive) => { 

    const { user, setUser } = useAuth();

    const [modalHealth, setModalHealth] = useState(false);

    const [selectHealth, setSelectHealth] = useState("RS");

    const [medicalIndicators, setMedicalIndicators] = useState({
      date: "",
      weight: "",
      vaccine: "",
    });

    const [medicalControls, setMedicalControls] = useState({
      doctor: "",
      date: "",
      observations: "",
    });

    const [accidents, setAccidents] = useState({
      typeRegister: "",
      date: "",
      diagnosis: "",
      treatment: "",
      evolution: "",
    });

    const [exams, setExams] = useState({
      date: "",
      exams: "",
      recommendations: "",
      image: "",
    });
    const handleSelectHealth = e => {
      const valueSelectHealth = e.target.value;

      if (valueSelectHealth !== "RS") {
        setSelectHealth(valueSelectHealth);
        setModalHealth(!modalHealth);
      }
    };

    const handleCloseModal = () => {
      setModalHealth(false);
      setSelectHealth("RS");
    };

    const reset = () => {
      setAccidents({
        typeRegister: "",
        date: "",
        diagnosis: "",
        treatment: "",
        evolution: "",
      });

      setExams({
        date: "",
        exams: "",
        recommendations: "",
        image: "",
      });

      setMedicalIndicators({
        date: "",
        weight: "",
        vaccine: "",
      });

      setMedicalControls({
        doctor: "",
        date: "",
        observations: "",
      });
    };

    const save = () => {
      if (selectHealth === "IM") {
        return {
          medicalIndicators: [
            ...user.petits[tabActive].medicalData.medicalIndicators,
            medicalIndicators,
          ],
        };
      } else if (selectHealth === "CM") {
        return {
          medicalControls: [
            ...user.petits[tabActive].medicalData.medicalControls,
            medicalControls,
          ],
        };
      } else if (selectHealth === "AE") {
        return {
          accidents: [
            ...user.petits[tabActive].medicalData.accidents,
            accidents,
          ],
        };
      } else
        return { exams: [...user.petits[tabActive].medicalData.exams, exams] };
    };

    const handleSaveHealth = () => {
      const copyPetits = [...user.petits];

      copyPetits[tabActive].medicalData = {
        ...copyPetits[tabActive].medicalData,
        ...save(),
      };

      setUser({
        ...user,
        ["petits"]: [...copyPetits],
      });

      reset();
      handleCloseModal();
    };

    const handleChangeExams = e => {
      const name = e.target.name;
      const value = e.target.value;
      setExams({ ...exams, [name]: value });
    };

    const handleChangeMedicalIndicators = e => {
      const name = e.target.name;
      const value = e.target.value;
      setMedicalIndicators({ ...medicalIndicators, [name]: value });
    };

    const handleChangeMedicalControls = e => {
      const name = e.target.name;
      const value = e.target.value;
      setMedicalControls({ ...medicalControls, [name]: value });
    };

    const handleChangeAccidents = e => {
      const name = e.target.name;
      const value = e.target.value;
      setAccidents({ ...accidents, [name]: value });
    };

    return {
        modalHealth,
      selectHealth,
      handleSelectHealth,
      handleCloseModal,
      medicalIndicators,
      handleChangeMedicalIndicators,
      medicalControls,
      handleChangeMedicalControls,
      exams,
      handleChangeExams,
      accidents,
      handleChangeAccidents,
      handleSaveHealth,
    };
}