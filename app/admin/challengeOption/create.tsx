import {  BooleanInput, Create,  ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challenged" reference="challenge" />
        <TextInput source="imageSrc"  label="Image URL" />
        <TextInput source="audioSrc"  label="Audio URL" />
      </SimpleForm>
    </Create>
  );
};
