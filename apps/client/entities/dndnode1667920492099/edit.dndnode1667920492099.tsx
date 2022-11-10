
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditDndnode1667920492099(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="dndnode1667920489982" source="dndnode1667920489982id" reference="dndnode1667920489982">
        <AutocompleteInput variant="outlined" /* optionText="dndnode1667920489982"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}