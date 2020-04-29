const prefix = "app/dataEntry/reducer/programs/";

export const types = {
  GET_PROGRAMS: `${prefix}GET_PROGRAMS`,
  SET_PROGRAMS: `${prefix}SET_PROGRAMS`,
  //ON_LOAD: `${prefix}ON_LOAD`,
  GET_PROGRAM_ENROLMENT: `${prefix}GET_PROGRAM_ENROLMENT`,
  SET_PROGRAM_ENROLMENT: `${prefix}SET_PROGRAM_ENROLMENT`,
  GET_PROGRAM_ENCOUNTER: `${prefix}GET_PROGRAM_ENCOUNTER`,
  SET_PROGRAM_ENCOUNTER: `${prefix}SET_PROGRAM_ENCOUNTER`,
  GET_PROGRAM_ENCOUNTER_FORM: `${prefix}GET_PROGRAM_ENCOUNTER_FORM`,
  SET_PROGRAM_ENCOUNTER_FORM: `${prefix}SET_PROGRAM_ENCOUNTER_FORM`,
  UPDATE_OBS: `${prefix}UPDATE_OBS`
};

export const getPrograms = subjectUuid => ({
  type: types.GET_PROGRAMS,
  subjectUuid
});

export const setPrograms = programs => ({
  type: types.SET_PROGRAMS,
  programs
});

export const getProgramEncounter = (subjectTypeName, programUuid) => ({
  type: types.GET_PROGRAM_ENCOUNTER,
  subjectTypeName,
  programUuid
});

export const setProgramEncounter = programEncounter => ({
  type: types.SET_PROGRAM_ENCOUNTER,
  programEncounter
});

export const getProgramEnrolment = enrolmentUuid => ({
  type: types.GET_PROGRAM_ENROLMENT,
  enrolmentUuid
});

export const setProgramEnrolment = programEnrolment => ({
  type: types.SET_PROGRAM_ENROLMENT,
  programEnrolment
});

export const getProgramEncounterForm = encounterTypeUuid => ({
  type: types.GET_PROGRAM_ENCOUNTER_FORM,
  encounterTypeUuid
});

export const setProgramEncounterForm = programEncounterForm => ({
  type: types.SET_PROGRAM_ENCOUNTER_FORM,
  programEncounterForm
});

export const updateObs = (formElement, value) => ({
  type: types.UPDATE_OBS,
  formElement,
  value
});

export default function(state = {}, action) {
  switch (action.type) {
    case types.SET_PROGRAMS: {
      return {
        ...state,
        programs: action.programs
      };
    }
    case types.SET_PROGRAM_ENROLMENT: {
      return {
        ...state,
        programEnrolment: action.programEnrolment
      };
    }
    case types.SET_PROGRAM_ENCOUNTER: {
      return {
        ...state,
        programEncounter: action.programEncounter
      };
    }
    case types.SET_PROGRAM_ENCOUNTER_FORM: {
      return {
        ...state,
        programEncounterForm: action.programEncounterForm
      };
    }
    default:
      return state;
  }
}
