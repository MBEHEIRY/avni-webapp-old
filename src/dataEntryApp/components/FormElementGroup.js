import { get } from "lodash";
import React from "react";
import { LineBreak } from "../../common/components/utils";
import { FormElement } from "./FormElement";

export const FormElementGroup = ({
  obsHolder,
  updateObs,
  children,
  validationResults,
  filteredFormElements,
  entity,
  renderChildren
}) => {
  return (
    <div>
      <LineBreak num={1} />
      {children && renderChildren ? children : ""}

      {filteredFormElements.map(fe => {
        const observation = obsHolder.findObservation(fe.concept);
        const observationValue = observation
          ? observation.concept.isDurationConcept()
            ? get(observation, "valueJSON")
            : get(observation, "valueJSON.answer")
          : null;
        return (
          <FormElement
            key={fe.uuid}
            concept={fe.concept}
            obsHolder={obsHolder}
            value={observationValue}
            validationResults={validationResults}
            uuid={fe.uuid}
            update={value => {
              updateObs(fe, value);
            }}
          >
            {fe}
          </FormElement>
        );
      })}
      <LineBreak num={1} />
    </div>
  );
};
