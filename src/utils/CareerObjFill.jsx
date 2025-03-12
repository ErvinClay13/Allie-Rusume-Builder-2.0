import { generateContent } from "./API";

export const handleCareerObjFill = async (formData, setFormData) => {
    const jobCareerObj = await generateContent(
    //    `Generate a professional job Career Objective input for a ${formData.careerObj} position.` 
    `Generate a professional job Career Objective input for a ${formData.jobTitle} position.` 
    );

    console.log( jobCareerObj );

    setFormData({ ...formData, careerObj: jobCareerObj });
};

