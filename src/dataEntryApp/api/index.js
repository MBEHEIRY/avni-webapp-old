import httpClient from "common/utils/httpClient";
import { get } from "lodash";

export default {
  fetchOperationalModules: () =>
    httpClient.fetchJson("/web/operationalModules").then(response => response.json),
  fetchForm: uuid => httpClient.fetchJson(`/web/form/${uuid}`).then(response => response.json),
  fetchGenders: () => httpClient.fetchJson("/web/gender").then(response => response.json),
  fetchAllLocation: () => httpClient.fetchJson("/web/locations").then(response => response.json),
  fetchOrganisationConfigs: () =>
    httpClient.fetchJson("/web/organisationConfig").then(response => response.json),

  fetchRelations: () =>
    httpClient.fetchJson("/web/relationshipType").then(response => response.json),
  saveSubject: subject =>
    httpClient.fetchJson("/individuals", {
      method: "POST",
      body: JSON.stringify(subject)
    }),

  saveProgramEnrolment: programEnrolment =>
    httpClient.fetchJson("/programEnrolments", {
      method: "POST",
      body: JSON.stringify(programEnrolment)
    }),

  searchResult: searchData =>
    httpClient.fetchJson("/web/searchAPI/v2", {
      method: "POST",
      body: JSON.stringify(searchData)
    }),

  saveProgramEncouter: programEncounter =>
    httpClient.fetchJson("/programEncounters", {
      method: "POST",
      body: JSON.stringify(programEncounter)
    }),

  saveRelationShip: Relationaldata =>
    httpClient.fetchJson("/individualRelationships", {
      method: "POST",
      body: JSON.stringify(Relationaldata)
    }),

  removeRelationShip: RelationId =>
    httpClient.fetchJson(`/web/relationShip/${RelationId}`, {
      method: "DELETE"
    }),

  saveEncounter: encounter =>
    httpClient.fetchJson("/encounters", {
      method: "POST",
      body: JSON.stringify(encounter)
    }),

  fetchProgramEncounter: uuid =>
    httpClient.fetchJson(`/web/programEncounter/${uuid}`).then(response => {
      return response.json;
    }),

  fetchEncounter: uuid =>
    httpClient.fetchJson(`/web/encounter/${uuid}`).then(response => {
      return response.json;
    }),

  fetchSubjectProfile: uuid =>
    httpClient.fetchJson(`/web/subjectProfile?uuid=${uuid}`).then(response => {
      return response.json;
    }),

  fetchPrograms: subjectUuid =>
    httpClient.fetchJson(`/web/eligiblePrograms?subjectUuid=${subjectUuid}`).then(response => {
      return response.json;
    }),

  fetchSubjectProgram: uuid => {
    return httpClient.fetchJson(`/web/subject/${uuid}/programs/`).then(response => response.json);
  },
  fetchSubjectGeneral: uuid => {
    return httpClient.fetchJson(`/web/subject/${uuid}/encounters/`).then(response => response.json);
  },
  fetchEnrolments: uuid => {
    return httpClient.fetchJson(`/api/enrolments/`).then(response => response.json);
  },
  fetchProgramEnrolments: uuid => {
    return httpClient.fetchJson(`/web/programEnrolments/${uuid}`).then(response => response.json);
  },
  fetchCompletedProgramEncounters: (enrolmentUuid, filterQueryString) =>
    httpClient
      .fetchJson(`/web/programEnrolment/${enrolmentUuid}/completed?${filterQueryString}`)
      .then(response => {
        return response.json;
      }),
  fetchCompletedEncounters: (subjectUuid, filterQueryString) =>
    httpClient
      .fetchJson(`/web/subject/${subjectUuid}/completed?${filterQueryString}`)
      .then(response => {
        return response.json;
      }),
  fetchProgramEnrolment: enrolmentUuid =>
    httpClient.fetchJson(`/web/programEnrolment/${enrolmentUuid}`).then(response => {
      return response.json;
    }),
  getRulesResponse: requestBody =>
    httpClient.post("/web/rules", requestBody).then(response => response.data),
  getLegacyRulesBundle: () =>
    httpClient
      .get(
        "/ruleDependency/search/lastModified?lastModifiedDateTime=1900-01-01T00:00:00.000Z&size=1000"
      )
      .then(response => get(response, "data._embedded.ruleDependency[0].code")),
  getLegacyRules: () =>
    httpClient
      .get("/rule/search/lastModified?lastModifiedDateTime=1900-01-01T00:00:00.000Z&size=1000")
      .then(response => get(response, "data._embedded.rule")),
  fetchGroupMembers: groupUUID =>
    httpClient.fetchJson(`/web/groupSubjects/${groupUUID}/members`).then(response => {
      return response.json;
    }),
  fetchGroupRoles: groupUUID =>
    httpClient.fetchJson(`/web/groupSubjects/${groupUUID}/roles`).then(response => {
      return response.json;
    }),
  fetchIdentifierAssignments: formUuid =>
    httpClient.get(`/web/form/${formUuid}/identifierAssignments`).then(response => response.data),
  addEditGroupSubject: groupSubjectContract =>
    httpClient.post("/groupSubjects", groupSubjectContract).then(response => response.data),
  deleteGroupSubject: uuid =>
    httpClient.delete(`/groupSubjects/${uuid}`).then(response => response.data)
};
